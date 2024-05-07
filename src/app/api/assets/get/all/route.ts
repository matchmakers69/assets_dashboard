import { AssetsMockData } from "@/Data/AssetData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const sortedData = AssetsMockData.sort((a, b) =>
    a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  );

  return NextResponse.json(sortedData, { status: 200 });
}
