export enum AssetType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export interface Attribute {
  key: string;
  value?: string | number | boolean;
  [key: string]: any;
}

export interface Asset {
  id: number;
  name: string;
  type: AssetType;
  description?: string;
  attributes?: Attribute[];
  children?: Asset[] | Asset;
}

export type ExtendetAsset = { parentsId: number[] } & Asset;
