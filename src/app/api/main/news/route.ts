import { NextRequest, NextResponse } from "next/server";
import newsPage1 from "@/data/news-page1.json";
import newsPage2 from "@/data/news-page2.json";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const pageIndex = searchParams.get("pageIndex");

  if (pageIndex === "1") return NextResponse.json(newsPage1);
  if (pageIndex === "2") return NextResponse.json(newsPage2);
}
