"use client";

import { Title } from "@/components/ui/Title";
import { useAssetDetails } from "../_hooks/useAssetDetails";
import { useParams } from "next/navigation";

export default function Details() {
  const params = useParams<{ id: string }>();
  const { singleAsset } = useAssetDetails(Number(params.id));
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
