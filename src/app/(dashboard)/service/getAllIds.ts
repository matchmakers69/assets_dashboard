import { Asset } from "@/Data/defs";

export const getAllIds = (assets: Asset[]): number[] => {
  let allIds: number[] = [];

  const refactorAssetsToGetIds = (asset: Asset) => {
    allIds.push(asset.id);

    if (asset.children) {
      if (Array.isArray(asset.children)) {
        asset.children.forEach((child) => refactorAssetsToGetIds(child));
      } else {
        refactorAssetsToGetIds(asset.children);
      }
    }
  };

  assets.forEach((asset) => refactorAssetsToGetIds(asset));

  return allIds;
};
