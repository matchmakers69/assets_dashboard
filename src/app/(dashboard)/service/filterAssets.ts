import { Asset, AssetType } from "@/Data/defs";

// const isAssetMonitored = (asset: Asset, monitored?: boolean) => {
//   if (monitored === undefined) return true;

//   const isMonitorAttribute = asset.attributes?.find(
//     (attr) => attr.key === "isMonitored"
//   );
//   return isMonitorAttribute ? isMonitorAttribute.value === monitored : false;
// };

const isAssetMonitored = (asset: Asset, monitored?: boolean): boolean => {
  const isMonitorAttribute = asset.attributes?.find(
    (attr) => attr.key === "isMonitored"
  );
  return isMonitorAttribute ? isMonitorAttribute.value === monitored : false;
};

export const filterAssets = (
  assets: Asset[],
  typeFilter: AssetType | null,
  monitoredFilter: boolean | null
): Asset[] => {
  return assets.reduce((filteredAssets: Asset[], asset) => {
    let filteredChildren: Asset[] = [];

    if (asset.children) {
      filteredChildren = filterAssets(
        Array.isArray(asset.children) ? asset.children : [asset.children],
        typeFilter,
        monitoredFilter
      );
    }

    const matchesTypeFilter = typeFilter === null || asset.type === typeFilter;
    const matchesMonitoredFilter =
      monitoredFilter === null || isAssetMonitored(asset, monitoredFilter);

    if (matchesTypeFilter && matchesMonitoredFilter) {
      filteredAssets.push({ ...asset, children: filteredChildren });
    } else if (filteredChildren.length > 0) {
      filteredAssets.push({ ...asset, children: filteredChildren });
    }

    return filteredAssets;
  }, []);
};
