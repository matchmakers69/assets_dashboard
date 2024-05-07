import { Asset } from "@/Data/defs";
import Link from "next/link";
import { AssetType } from "../../AssetType";
import { AssetLevel2 } from "../AssetLevel2";

interface AssetLevel1Props {
  asset: Asset;
}

function AssetLevel1({ asset }: AssetLevel1Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <AssetType
          className="bg-green w-20 h-20 text-[2rem]"
          assetType={asset.type}
        />
        <div className="flex flex-col justify-between">
          <h3 className="text-[1.8rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h3>
          <Link
            href={`/assets/${asset.id}`}
            className="text-sm text-text-dark-blue underline hover:text-zinc-100"
          >
            read more
          </Link>
        </div>
      </div>
      <div className="ml-8 space-y-6">
        {asset.children && Array.isArray(asset.children)
          ? asset.children.map((nestedAsset1) => (
              <AssetLevel2 asset={nestedAsset1} key={nestedAsset1.id} />
            ))
          : null}

        {asset.attributes &&
          asset.attributes.length > 0 &&
          asset.attributes.map((attr) => {
            return (
              <div key={attr.key}>
                <div className="flex flex-col justify-between">
                  <h3 className="text-[1.6rem] text-text-light font-bold leading-[1.6]">
                    {attr.key}
                  </h3>
                  {attr.value && (
                    <h3 className="text-[1.4rem] text-text-light font-semibold leading-[1.6]">
                      {attr.value}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}
        {asset.children && !Array.isArray(asset.children) ? (
          <AssetLevel2 asset={asset.children} />
        ) : null}
      </div>
    </>
  );
}

export { AssetLevel1 };
