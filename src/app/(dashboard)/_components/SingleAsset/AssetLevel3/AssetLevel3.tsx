import { Asset } from "@/Data/defs";
import { AttriibuteLevel4 } from "../AttributeLevel4";
import { AssetCta } from "../AssetCta";

interface AssetLevel3Props {
  asset: Asset;
}

function AssetLevel3({ asset }: AssetLevel3Props) {
  return (
    <>
      <div className="flex items-center gap-8">
        <AssetCta className="w-14 h-14 bg-dark-blue text-[1.8rem]" asset={asset}>
        <h5 className="text-[1.4rem] text-text-light font-bold leading-[1.4]">
            {asset.name}
          </h5>
        </AssetCta>
      </div>

      <div className="sm:ml-10 space-y-3">
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
