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

    if (children) {
    }

    sortedData.push(asset);
    delete asset.children;
  };

  return (
    <section className="text-text-light">
      <div className="container mx-auto">
        <Title title="Details" />
        detale
      </div>
    </section>
  );
}

interface Tree {
  id: number;
  type: string;
  children: Tree[];
}

interface FlattenTree {
  id: number;
  parentId?: number;
  type: string;
  level: number;
}

const tree: Tree[] = [
  {
    id: 1,
    type: "cos",
    children: [
      { id: 2, type: "cs2", children: [{ id: 3, type: "cos", children: [] }] },
    ],
  },
];

const flattenTree: FlattenTree[] = [
  {
    id: 1,
    type: "cos",
    level: 0,
  },
  { id: 2, type: "cs2", parentId: 1, level: 1 },
  { id: 3, type: "cos", parentId: 2, level: 2 },
];

// Level 1
// Level 2
