import { AssetsMockData } from "@/Data/AssetData";
import { Asset, ExtendetAsset } from "@/Data/defs";
import { traversAssetsDataToExposeChildren } from "@/Data/flattenAssets";
import { NextRequest, NextResponse } from "next/server";

const GET = (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id") as string;

  try {
    const copiedAssetsMockData = JSON.parse(
      JSON.stringify(AssetsMockData)
    ) as Asset[];

    const traversedDataWithParentId: ExtendetAsset[] = [];

    copiedAssetsMockData.forEach((data) => {
      traversAssetsDataToExposeChildren(data, traversedDataWithParentId, []);
    });

    const foundData = traversedDataWithParentId.find(
      (data) => `${data.id}` === id
    );

    return NextResponse.json({ status: 200, data: foundData });
  } catch (error) {
    return NextResponse.json({ status: 500, error: `${error}` });
  }
};

export { GET };
