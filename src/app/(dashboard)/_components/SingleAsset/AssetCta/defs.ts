import { Asset } from "@/Data/defs";
import { ReactNode } from "react";

export interface AssetCtaProps {
  asset: Asset;
  children: ReactNode;
  className?: string;
}
