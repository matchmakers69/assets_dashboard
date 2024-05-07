import { Asset } from "@/Data/defs";

export const removeAssetById = (
  assetId: number,
  assetsData: Asset[]
): Asset[] => {
  const filteredAssets = assetsData.filter((asset) => asset.id !== assetId);

  filteredAssets.forEach((asset) => {
    if (Array.isArray(asset.children)) {
      asset.children = removeAssetById(assetId, asset.children);
    } else if (asset.children && asset.children.id !== undefined) {
      asset.children = removeAssetById(assetId, [asset.children]);
    }
  });

  return filteredAssets;
};
