import { Asset, AssetType } from "@/Data/defs";

export interface NewAssetType {
  id: number;
  type: AssetType;
  parent: number | null;
  name: string;
}

export interface AssetsContextType {
  assets: Asset[];
  filterType: AssetType | null;
  handleSetFilterTypeChange: (type: AssetType) => void;
  handleSetIsMonitoredChecked: (isMonitored: boolean) => void;
  isMonitored: boolean;
  loading: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isModalShown: boolean;
  addAsset: ({ id, type, parent, name }: NewAssetType) => void;
}
