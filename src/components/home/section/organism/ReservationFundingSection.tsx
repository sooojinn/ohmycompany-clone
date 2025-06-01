import { useEffect, useState } from "react";
import HomeSection from "./HomeSection";
import ReservationFundingCard from "@/components/funding-card/organism/ReservationFundingCard";

export default function ReservationFundingSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/projects?category=reservation&projectType=reward")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <HomeSection
      title="곧 오픈할 새로운 펀딩을 예약하세요!"
      href="/reservation/list"
    >
      {data.map((card: any) => {
        return <ReservationFundingCard key={card.projectSeq} {...card} />;
      })}
    </HomeSection>
  );
}
