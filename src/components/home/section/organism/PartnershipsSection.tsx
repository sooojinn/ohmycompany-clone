import { useEffect, useState } from "react";
import HomeSection from "./HomeSection";
import PartnerCard from "../mocule/PartnerCard";

export default function PartnershipsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/partnerships")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <HomeSection
      title="오마이컴퍼니와 함께하는 파트너"
      href="https://www.ohmycompany.com/partnership/partnerlist"
    >
      {data.map((card: any) => {
        return <PartnerCard key={card.contestSeq} {...card} />;
      })}
    </HomeSection>
  );
}
