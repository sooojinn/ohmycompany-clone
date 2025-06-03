"use client";

import FundingCard from "@/components/funding-card/organism/FundingCard";
import { useEffect, useState } from "react";
import HomeSectionTitle from "../molecule/HomeSectionTitle";

export default function PopularFundingSection() {
  const [data, setData] = useState([]);
  const [projectType, setProjectType] = useState<"reward" | "invest">("reward");

  useEffect(() => {
    fetch(`/api/main/projects?category=popular&projectType=${projectType}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [projectType]);

  return (
    <div>
      <HomeSectionTitle
        projectType={projectType}
        onProjectTypeClick={setProjectType}
      >
        수많은 사람들의 Pick! 인기 펀딩
      </HomeSectionTitle>
      <div className="w-full flex gap-6 max-lg:flex-col">
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
    </div>
  );
}
