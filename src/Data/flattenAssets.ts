import { Asset, ExtendetAsset } from "@/Data/defs";

export const traversAssetsDataToExposeChildren = (
  asset: Asset,
  extendedAssets: ExtendetAsset[],
  parentsId: number[]
) => {
  extendedAssets.push({ ...asset, parentsId: parentsId });

  if (asset.children) {
    if (Array.isArray(asset.children)) {
      asset.children.forEach((data) => {
        const newParentsId = [...parentsId, asset.id];

        traversAssetsDataToExposeChildren(data, extendedAssets, newParentsId);
      });
    } else {
      traversAssetsDataToExposeChildren(asset.children, extendedAssets, [
        ...parentsId,
        asset.id,
      ]);
    }
  }
};
