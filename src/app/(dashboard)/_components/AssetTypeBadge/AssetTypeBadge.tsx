import { cn } from "@/utils/cn"
import { AssetTypeBadgeProps } from "./defs"

function AssetTypeBadge({className, assetType}: AssetTypeBadgeProps) {
  return (
    <div
      className={cn(
        "bg-card w-24 h-24 text-[2.4rem] rounded-full flex items-center justify-center text-text-light font-semibold uppercase",
        className
      )}
    >
      {assetType}
    </div>
  )
}

export  {AssetTypeBadge}