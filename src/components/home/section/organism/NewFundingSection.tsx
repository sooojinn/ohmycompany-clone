"use client";

import HomeSection from "./HomeSection";
import { useEffect, useState } from "react";
import NewFundingCard from "@/components/funding-card/organism/NewFundingCard";

export default function NewFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=new&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <HomeSection title="신규 펀딩" col={3}>
      {data.map((card: any) => {
        return <NewFundingCard key={card.projectSeq} {...card} />;
      })}
    </HomeSection>
  );
}
