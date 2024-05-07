"use client";

import Link from "next/link";
import { AssetTypeBadge } from "../../AssetTypeBadge";
import { AssetCtaProps } from "./defs";
import { useAssetsContext } from "@/context/AssetsContext";
import { Button } from "@/components/ui/Button";

function AssetCta({ asset, children, className }: AssetCtaProps) {
  const { handleRemoveAsset } = useAssetsContext();
  return (
    <>
      <AssetTypeBadge className={className} assetType={asset.type} />
      <div className="flex flex-col">
        {children}
        <Link
          href={`/assets/${asset.id}`}
          className="text-sm text-text-dark-blue underline hover:text-zinc-100"
        >
          view details
        </Link>
    
      </div>
      
      <Button className="bg-red-600 text-text-light text-[1.6rem]" label="remove" onClick={() => handleRemoveAsset(asset.id)} type="button" />
    
       
    </>
  );
}

export { AssetCta };
