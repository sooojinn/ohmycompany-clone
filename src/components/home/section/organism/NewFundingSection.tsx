"use client";

import { useEffect, useState } from "react";
import NewFundingCard from "@/components/funding-card/organism/NewFundingCard";
import HomeSectionTitle from "../molecule/HomeSectionTitle";
import HorizontalScrollSection from "./HorizontalScrollSection";

export default function NewFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=new&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <HomeSectionTitle>신규 펀딩</HomeSectionTitle>
      <HorizontalScrollSection>
        {data.map((card: any) => {
          return <NewFundingCard key={card.projectSeq} {...card} />;
        })}
      </HorizontalScrollSection>
    </div>
  );
}
