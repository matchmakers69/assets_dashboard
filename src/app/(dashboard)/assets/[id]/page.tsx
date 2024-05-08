import { Title } from "@/components/ui/Title";
import { getAssetById } from "@/Data/getAssetByIdApi";
import { AssetDetailsProps } from "./defs";
import Link from "next/link";
import { AssetTypeBadge } from "../../_components/AssetTypeBadge";

export default async function Details({ params }: AssetDetailsProps) {
  const { data: asset, error } = await getAssetById(params.id);
  if(error) {
    <div>Error occured</div>
  }
  if (!asset) {
    return <div><p className="font-bold text-center px-10 py-10 text-text-light text-2xl">Asset cannot be found. No databse added.</p></div>
  };

  return (
    <section className="text-text-light">
      <div className="container mx-auto">
        <Title title={`Details for asset with ID - ${asset?.id}`} />
        <div className="flex justify-start items-center gap-6 mb-10">
          <AssetTypeBadge
            assetType={asset?.type}
            className="w-24 h-24 sm:w-32 sm:h-32 md:h-44 md:w-44 text-[3rem] sm:text-[4rem] md:text-[6rem]"
          />
          <div className="flex flex-col justify-between">
            <h2 className="text-[2.2rem uppercase md:text-[8rem] text-text-light font-bold leading-[1.6]">
              {asset?.name}
            </h2>
          </div>
        </div>
        {asset?.description && (
          <div>
            <p className="text-text-light text-[2.6rem] md:text-[2.8rem] mb-4 font-semibold">
              {asset.description}
            </p>
          </div>
        )}
            {asset?.children && Array.isArray(asset.children)
            ? <>
            <h2 className="text-text-light font-semibold text-[2rem]">
              Children:
            </h2>
            <ul>
              {asset.children.map((child) => (
                <li key={child.id}>
                  {child.name}
                </li>
              ))}
            </ul>
            </>
            : null}
        {asset?.attributes && asset.attributes.length > 0 && (
          <>
            <h2 className="text-text-light font-semibold text-[2rem]">
              Attributes:
            </h2>
            <ul>
              {asset.attributes.map((attribute) => (
                <li key={attribute.key}>
                  <div>{attribute.key}</div>
                  {attribute.value && <div>{attribute.value}</div>}
                </li>
              ))}
            </ul>
          </>
        )}

        <footer className="py-10 flex justify-center w-full">
          <Link
            className="text-light-text w-[20rem] font-semibold uppercase flex flex-col justify-center items-center bg-pink h-[5rem]"
            href="/"
          >
            Go to dashboard
          </Link>
        </footer>
      </div>
    </section>
  );
}
