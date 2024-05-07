import { Asset } from "@/Data/defs";
import { AssetLevel3 } from "../AssetLevel3";
import { AssetCta } from "../AssetCta";

interface AssetLevel2Props {
  asset: Asset;
}

function AssetLevel2({ asset }: AssetLevel2Props) {
  return (
    <>
      <div className="flex items-center gap-8">
        <AssetCta className="w-16 h-16 bg-pink text-[2rem]" asset={asset}>
        <h4 className="text-[1.5rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h4>
        </AssetCta>
      </div>

      <div className="sm:ml-10 space-y-2 sm:space-y-4 md:space-y-6">
        {asset.children && Array.isArray(asset.children)
          ? asset.children.map((nestedAsset2) => (
              <AssetLevel3 key={nestedAsset2.id} asset={nestedAsset2} />
            ))
          : null}
      </div>
    </>
  );
}

export { AssetLevel2 };
