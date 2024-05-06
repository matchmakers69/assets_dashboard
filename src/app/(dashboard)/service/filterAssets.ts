import { Asset, AssetType } from "@/Data/defs";

const isAssetMonitored = (asset: Asset, monitored?: boolean) => {
  if (monitored === undefined) return true;

  const isMonitorAttribute = asset.attributes?.find(
    (attr) => attr.key === "isMonitored"
  );
  return isMonitorAttribute ? isMonitorAttribute.value === monitored : false;
};

export const filterByType = (
  assets: Asset[],
  type: AssetType,
  isMonitored?: boolean
) => {
  return assets.reduce((acc: Asset[], asset) => {
    let filteredChildren: Asset[] = [];

    if (asset.children) {
      filteredChildren = filterByType(
        Array.isArray(asset.children) ? asset.children : [asset.children],
        type,
        isMonitored
      );
    }

    const matchesType = asset.type === type;
    const matchesMonitoring = isAssetMonitored(asset, isMonitored);

    if (matchesType && matchesMonitoring) {
      acc.push({ ...asset, children: filteredChildren });
    } else if (filteredChildren.length > 0) {
      acc.push({ ...asset, type: asset.type, children: filteredChildren });
    }

    return acc;
  }, []);
};
