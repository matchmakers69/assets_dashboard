"use client";

import { AssetType } from "@/Data/defs";
import { useAssetsContext } from "@/context/AssetsContext";

function AssetFilters() {
  const {
    filterType,
    handleSetFilterTypeChange,
    handleSetIsMonitoredChecked,
    isMonitored,
  } = useAssetsContext();

  return (
    <div className="mb-10 w-full max-w-[480px]">
      <div className="select-wrapper mb-4">
        <label
          htmlFor="typeFilter"
          className="block mb-3 text-md font-medium text-text-light"
        >
          Filter by type:
        </label>
        <select
          className="block py-6 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          id="typeFilter"
          value={filterType || ""}
          onChange={(e) =>
            handleSetFilterTypeChange(e.target.value as AssetType)
          }
        >
          <option value="">All</option>
          {Object.values(AssetType).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <label
          htmlFor="isMonitored"
          className="block mr-4 text-md font-medium text-text-light"
        >
          Is monitored:
        </label>
        <input
          id="isMonitored"
          type="checkbox"
          checked={isMonitored || false}
          onChange={(e) => handleSetIsMonitoredChecked(e.target.checked)}
          className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
    </div>
  );
}

export { AssetFilters };
