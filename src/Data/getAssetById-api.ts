import { ExtendetAsset } from "@/Data/defs";
import axios from "axios";

export const getAssetById = async (
  id: string
): Promise<{ status: number; data: ExtendetAsset }> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/api/assets/get/byId/?id=${id}`
    );
    return res.data;
  } catch (error) {
    throw new Error("Cannot fetch asset by id");
  }
};
