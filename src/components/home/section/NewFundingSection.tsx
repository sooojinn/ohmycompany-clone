"use client";

import FundingCard from "@/components/funding-card/organism/FundingCard";
import HomeSection from "./HomeSection";
import { useEffect, useState } from "react";

export default function NewFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=new&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <HomeSection title="신규 펀딩">
      <div className="grid gap-6 grid-cols-3">
        {data.map((card: any) => {
          return (
            <FundingCard
              key={card.projectSeq}
              {...card}
              hideProfile
              hideDesc
              hideSummary
            />
          );
        })}
      </div>
    </HomeSection>
  );
}
