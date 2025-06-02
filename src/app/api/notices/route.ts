import { NextResponse } from "next/server";
import notices from "@/data/notices.json";

export async function GET() {
  return NextResponse.json(notices);
}
