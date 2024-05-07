import { Asset } from "@/Data/defs";
import { AssetLevel2 } from "../AssetLevel2";
import { AssetCta } from "../AssetCta";

interface AssetLevel1Props {
  asset: Asset;
}

function AssetLevel1({ asset }: AssetLevel1Props) {

  return (
    <>
      <div className="flex items-center gap-8">
        <AssetCta className="w-20 h-20 bg-green text-[2.2rem]" asset={asset}>
        <h3 className="text-[1.8rem] text-text-light font-bold leading-[1.6]">
            {asset.name}
          </h3>
        </AssetCta>
      </div>
      <div className="sm:ml-10 space-y-8 sm:space-y-10 md:space-y-16">
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
                <div className="flex flex-col">
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
