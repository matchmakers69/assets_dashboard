"use client";

import { useAssetsContext } from "@/context/AssetsContext";

export const useAssetDetails = (id: number) => {
  const { assets } = useAssetsContext();
  const singleAsset = assets.find((asset) => asset.id === id);

  return {
    singleAsset,
  };
};
