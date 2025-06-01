import { NextResponse } from "next/server";
import middleBanners from "@/data/middle-banner.json";

export async function GET() {
  return NextResponse.json(middleBanners);
}
