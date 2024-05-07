"use client";
import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AssetsContextType, NewAssetType } from "./defs";
import { Asset, AssetType } from "@/Data/defs";
import { filterAssets } from "@/app/(dashboard)/service/filterAssets";
import { removeAssetById } from "@/app/(dashboard)/service/removeAssetById";

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
  const [monitoredFilter, setMonitoredFilter] = useState<boolean | null>(null);
  const [selectedAssetType, setSelectedAssetType] = useState<AssetType | null>(
    null
  );
  const [assetId, setAssetId] = useState<number | null>(null);

  const [newAssetTextInputValues, setNewAssetTextInputValues] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  const handleTypeFilterChange = (type: AssetType | "") => {
    if (type === "") {
      setFilterType(null);
    } else {
      setFilterType(type);
    }
  };

  const handleMonitoredFilterChange = (checked: boolean) => {
    setMonitoredFilter(checked ? true : null);
  };

  const handleSelectAssetTypeChange = (type: AssetType) => {
    return setSelectedAssetType(type);
  };

  useEffect(() => {
    if (filterType !== null || monitoredFilter !== null) {
      setResultAssets(filterAssets(assets, filterType, monitoredFilter));
    } else {
      setResultAssets(assets);
    }
  }, [assets, filterType, monitoredFilter]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const { data: response } = await axios.get("/api/assets/get/all");
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
  const handleSetTextValuesAssetChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setNewAssetTextInputValues((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

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
            const existingChildren = Array.isArray(asset.children)
              ? asset.children
              : asset.children
              ? [asset.children]
              : [];
            return { ...asset, children: [...existingChildren, newAsset] };
          } else if (asset.children) {
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

  const handleRemoveAsset = useCallback(
    (assetId: number) => {
      const filteredAssets = removeAssetById(assetId, assets);
      setAssets(filteredAssets);
    },
    [assets]
  );

  const handleOpenModal = () => {
    setIsModalShown(true);
  };

  const handleCloseModal = () => {
    setIsModalShown(false);
  };

  const handleSetAssetIdChange = (id: number | null) => {
    if (id === null) {
      return setAssetId(null);
    }
    return setAssetId(id);
  };

  const value = useMemo(
    () => ({
      assets: resultAssets,
      loading,
      filterType,
      selectedAssetType,
      handleTypeFilterChange,
      handleSelectAssetTypeChange,
      handleMonitoredFilterChange,
      handleSetAssetIdChange,
      assetId,
      monitoredFilter,
      addAsset,
      handleOpenModal,
      handleCloseModal,
      isModalShown,
      newAssetTextInputValues,
      handleSetTextValuesAssetChange,
      handleRemoveAsset,
      setResultAssets,
    }),
    [
      resultAssets,
      loading,
      filterType,
      selectedAssetType,
      assetId,
      monitoredFilter,
      isModalShown,
      newAssetTextInputValues,
      handleSetTextValuesAssetChange,
      handleRemoveAsset,
      setResultAssets,
    ]
  );
  return (
    <AssetsContext.Provider value={value}>{children}</AssetsContext.Provider>
  );
}
