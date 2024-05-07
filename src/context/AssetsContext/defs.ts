import { Asset, AssetType } from "@/Data/defs";

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
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalShown: boolean;
  addAsset: ({ id, type, parent, name }: NewAssetType) => void;
  newAssetTextInputValues: { name: string; description: string };
  handleSetTextValuesAssetChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}
