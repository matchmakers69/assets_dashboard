import Link from "next/link";
import { SingleAssetProps } from "./defs";
import { AssetType } from "../AssetType";
import { AssetLevel1 } from "./AssetLevel1";
import { AttributeLevel1 } from "./AttributeLevel1";

export function SingleAsset({ asset }: SingleAssetProps) {
  return (
    <div className="space-y-12">
      <div className="flex items-start space-x-4">
        <AssetType assetType={asset.type} />
        <div className="flex flex-col justify-between">
          <h2 className="text-[2.2rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h2>
          <Link
            href={`/assets/${asset.id}`}
            className="text-sm text-text-dark-blue underline hover:text-zinc-100"
          >
            read more
          </Link>
        </div>
      </div>
      <div className="ml-10 space-y-6">
        {asset.children && Array.isArray(asset.children)
          ? asset.children.map((child) => (
              <AssetLevel1 key={child.id} asset={child} />
            ))
          : null}
        {asset.attributes &&
          asset.attributes.length > 0 &&
          asset.attributes.map((attr) => {
            return (
              <AttributeLevel1
                key={attr.key}
                attribute={attr}
              ></AttributeLevel1>
            );
          })}
      </div>
    </div>
  );
}
