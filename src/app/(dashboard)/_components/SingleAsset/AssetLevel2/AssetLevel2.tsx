import { Asset } from "@/Data/defs";
import { AssetType } from "../../AssetType";
import { AssetLevel3 } from "../AssetLevel3";

interface AssetLevel2Props {
  asset: Asset;
}

function AssetLevel2({ asset }: AssetLevel2Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <AssetType
          className="bg-purple w-16 h-16 text-[1.8rem]"
          assetType={asset.type}
        />
        <div className="flex flex-col justify-between">
          <h4 className="text-[1.6rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h4>
        </div>
      </div>

      <div className="ml-8 space-y-6">
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
