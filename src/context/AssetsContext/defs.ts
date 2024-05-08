import { Asset, AssetType } from "@/Data/defs";
import { Dispatch, SetStateAction } from "react";

export interface NewAssetType {
  id: number;
  type: AssetType;
  parent: number | null;
  name: string;
}

export type NewCreatedAsset = Omit<Asset, "id" | "parent" | "children">;

export interface AssetsContextType {
  assets: Asset[];
  filterType: AssetType | null;
  selectedAssetType: AssetType | null;
  handleTypeFilterChange: (type: AssetType) => void;
  handleMonitoredFilterChange: (isMonitored: boolean) => void;
  handleSelectAssetTypeChange: (type: AssetType) => void;
  handleSetAssetIdChange: (id: number) => void;
  assetId: number | null;
  monitoredFilter: boolean | null;
  loading: boolean;
  addAsset: ({ id, type, parent, name }: NewAssetType) => void;
  handleRemoveAsset: (assetId: number) => void;
  newAssetTextInputValues: { name: string; description: string };
  setResultAssets?: Dispatch<SetStateAction<Asset[]>>;
  handleSetTextValuesAssetChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
