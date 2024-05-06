import { AssetsMockData } from "@/Data/AssetData";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(AssetsMockData, { status: 200 });
}
