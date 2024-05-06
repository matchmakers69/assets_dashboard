import { Asset } from "@/Data/defs";
import { AssetType } from "../../AssetType";
import { AttriibuteLevel4 } from "../AttributeLevel4";

interface AssetLevel3Props {
  asset: Asset;
}

function AssetLevel3({ asset }: AssetLevel3Props) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <AssetType
          className="bg-pink w-14 h-14 text-[1.6rem]"
          assetType={asset.type}
        />
        <div className="flex flex-col justify-between">
          <h4 className="text-[1.6rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h4>
        </div>
      </div>

      <div className="ml-8 space-y-6">
        {asset.attributes &&
          asset.attributes.length > 0 &&
          asset.attributes.map((attr) => {
            return <AttriibuteLevel4 key={attr.key} attribute={attr} />;
          })}
      </div>
    </>
  );
}

export { AssetLevel3 };
