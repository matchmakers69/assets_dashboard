"use client";

import { Title } from "@/components/ui/Title";
import { useAssetDetails } from "../_hooks/useAssetDetails";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { useAssetsContext } from "@/context/AssetsContext";
import { Asset } from "@/Data/defs";

export default function Details() {
  const params = useParams<{ id: string }>();
  const { assets } = useAssetsContext();
  const { singleAsset } = useAssetDetails(Number(params.id));

  const copiedAsstets = structuredClone(assets);

  const sortedData: Asset[] = [];

  const sortData = (asset: Asset) => {
    const { children } = asset;

    sortedData.push(asset);

    if (children) {
    }
  };

  console.log(params, "params");
  console.log(singleAsset, "vggfbrt");
  return (
    <section className="text-text-light">
      <div className="container mx-auto">
        <Title title="Details" />
        detale
      </div>
    </section>
  );
}
