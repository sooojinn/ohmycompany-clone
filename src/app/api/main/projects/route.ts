import { NextRequest, NextResponse } from "next/server";
import recommendFundings from "@/data/recommend-fundings.json";
import newFundings from "@/data/new-fundings.json";
import popularRewardFundings from "@/data/popular-reward-fundings.json";
import popularInvestFundings from "@/data/popular-invest-fundings.json";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get("category");
  const projectType = searchParams.get("projectType");

  if (category === "recommend") return NextResponse.json(recommendFundings);
  if (category === "new") return NextResponse.json(newFundings);
  if (category === "popular") {
    if (projectType === "reward")
      return NextResponse.json(popularRewardFundings);
    else if (projectType === "invest")
      return NextResponse.json(popularInvestFundings);
  }
}
