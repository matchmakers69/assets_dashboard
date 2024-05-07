"use client";

import { AssetType } from "@/Data/defs";
import { useAssetsContext } from "@/context/AssetsContext";
import { FilterTypeSelect } from "../FilterTypeSelect";

function AssetFilters() {
  const {
    filterType,
    handleTypeFilterChange ,
    handleMonitoredFilterChange,
    monitoredFilter,
  } = useAssetsContext();

  return (
    <div className="mb-12 mt-16 w-full max-w-[480px]">
      <div className="select-wrapper mb-4">
        <FilterTypeSelect
          onChange={handleTypeFilterChange}
          value={filterType || ""}
          id="typeFilter"
          defaultValue="asset type"
          label="Filter by type"
          className="text-text-light"
          defaultOptionLabel="All"
          options={["", ...Object.values(AssetType)]}
        />
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
          checked={monitoredFilter === true}
          onChange={(e) => handleMonitoredFilterChange(e.target.checked)}
          className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
    </div>
  );
}

export { AssetFilters };
