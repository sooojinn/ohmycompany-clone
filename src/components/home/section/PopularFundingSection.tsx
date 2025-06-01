"use client";

import FundingCard from "@/components/funding-card/organism/FundingCard";
import HomeSection from "./HomeSection";
import { useEffect, useState } from "react";

export default function PopularFundingSection() {
  const [data, setData] = useState([]);
  const [projectType, setProjectType] = useState<"reward" | "invest">("reward");

  useEffect(() => {
    fetch(`/api/main/projects?category=popular&projectType=${projectType}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [projectType]);

  return (
    <HomeSection
      title="수많은 사람들의 Pick! 인기 펀딩"
      projectType={projectType}
      onProjectTypeClick={setProjectType}
    >
      <div className="grid gap-6 grid-cols-4">
        {data.map((card: any) => {
          return (
            <FundingCard
              key={card.projectSeq || card.investSeq}
              {...card}
              hideDesc
            />
          );
        })}
      </div>
    </HomeSection>
  );
}
