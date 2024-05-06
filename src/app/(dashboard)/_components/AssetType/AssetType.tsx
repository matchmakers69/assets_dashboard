import { cn } from "@/utils/cn";
import { AssetTypeProps } from "./defs";

function AssetType({ assetType, className }: AssetTypeProps) {
  return (
    <div
      className={cn(
        "bg-card w-24 h-24 text-[2.4rem] rounded-full flex items-center justify-center text-text-light font-semibold uppercase",
        className
      )}
    >
      {assetType}
    </div>
  );
}

export { AssetType };
