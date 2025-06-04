import { useEffect, useState } from "react";
import ReservationFundingCard from "@/components/funding-card/organism/ReservationFundingCard";
import HomeSectionTitle from "../molecule/HomeSectionTitle";
import HorizontalScrollSection from "./HorizontalScrollSection";

export default function ReservationFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=reservation&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <HomeSectionTitle href="/reservation/list">
        곧 오픈할 새로운 펀딩을 예약하세요!
      </HomeSectionTitle>
      <HorizontalScrollSection>
        {data.map((card: any) => {
          return <ReservationFundingCard key={card.projectSeq} {...card} />;
        })}
      </HorizontalScrollSection>
    </div>
  );
}
