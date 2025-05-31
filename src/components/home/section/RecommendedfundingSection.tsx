"use client";

import FundingCard from "@/components/funding-card/organism/FundingCard";
import HomeSection from "./HomeSection";
import { useEffect, useState } from "react";

export default function RecommendedFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <HomeSection title="지금, 참여해야 할 추천 펀딩">
      <div className="grid gap-6 grid-cols-4">
        {data.map((card: any) => {
          return <FundingCard key={card.projectSeq} {...card} />;
        })}
      </div>
    </HomeSection>
  );
}
