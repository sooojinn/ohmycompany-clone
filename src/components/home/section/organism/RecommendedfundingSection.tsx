"use client";

import { useEffect, useState } from "react";
import HomeSectionTitle from "../molecule/HomeSectionTitle";
import RecommendedFundingCard from "@/components/funding-card/organism/RecommendedFundingCard";

export default function RecommendedFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=recommend&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <HomeSectionTitle>지금, 참여해야 할 추천 펀딩</HomeSectionTitle>
      <div className="w-full flex gap-6 max-lg:flex-col">
        {data.map((card: any) => {
          return (
            <RecommendedFundingCard key={card.projectSeq} {...card} hideDesc />
          );
        })}
      </div>
    </div>
  );
}
