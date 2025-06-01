import { NextResponse } from "next/server";
import bigBanners from "@/data/big-banners.json";

export async function GET() {
  return NextResponse.json(bigBanners);
}
