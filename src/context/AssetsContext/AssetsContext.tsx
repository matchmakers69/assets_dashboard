"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AssetsContextType, NewAssetType } from "./defs";
import { Asset, AssetType } from "@/Data/defs";
import { filterByType } from "@/app/(dashboard)/service/filterAssets";

export const AssetsContext = createContext<AssetsContextType | null>(null);

export const useAssetsContext = () => {
  const context = useContext(AssetsContext);

  if (!context) {
    throw new Error("Wrap by provider");
  }

  return context;
};

export function AssetsProvider({ children }: { children: React.ReactNode }) {
  const [isModalShown, setIsModalShown] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [resultAssets, setResultAssets] = useState<Asset[]>([]);
  const [filterType, setFilterType] = useState<AssetType | null>(null);
  const [isMonitored, setIsMonitored] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const handleOpenModal = () => {
    setIsModalShown(true);
  };

  const handleCloseModal = () => {
    setIsModalShown(false);
  };

  const handleSetFilterTypeChange = (type: AssetType | "") => {
    if (type === "") {
      return setFilterType(null);
    }
    return setFilterType(type);
  };

  const handleSetIsMonitoredChecked = (isMonitored: boolean) => {
    return setIsMonitored(isMonitored);
  };

  useEffect(() => {
    if (filterType !== null) {
      setResultAssets(filterByType(assets, filterType, isMonitored));
    } else {
      setResultAssets(assets);
    }
  }, [assets, filterType, isMonitored]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data: response } = await axios.get("/api/assets");
        setAssets(response);
        setResultAssets(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAssets();
  }, []);

  // Create new asset
  const addAsset = ({ id, type, parent, name }: NewAssetType) => {
    setFilterType(null);

    setAssets((prevState) => {
      const newAsset: Asset = {
        id,
        name,
        type,
        children: [],
      };

      const addAssetToParent = (assets: Asset[], parentId: number): Asset[] => {
        return assets.map((asset) => {
          if (asset.id === parentId) {
            // We need to make sure children is an Array not an object
            const existingChildren = Array.isArray(asset.children)
              ? asset.children
              : asset.children
              ? [asset.children]
              : [];
            return { ...asset, children: [...existingChildren, newAsset] };
          } else if (asset.children) {
            // If children is not empty we add asset in recursive way normalizing children to array
            const normalizedChildren = Array.isArray(asset.children)
              ? asset.children
              : [asset.children];
            return {
              ...asset,
              children: addAssetToParent(normalizedChildren, parentId),
            };
          } else {
            return asset;
          }
        });
      };

      return parent
        ? addAssetToParent(prevState, parent)
        : [...prevState, newAsset];
    });
  };

  const value = useMemo(
    () => ({
      assets: resultAssets,
      loading,
      filterType,
      handleSetFilterTypeChange,
      handleSetIsMonitoredChecked,
      isMonitored,
      addAsset,
      handleOpenModal,
      handleCloseModal,
      isModalShown,
    }),
    [filterType, isModalShown, isMonitored, loading, resultAssets]
  );
  return (
    <AssetsContext.Provider value={value}>{children}</AssetsContext.Provider>
  );
}
