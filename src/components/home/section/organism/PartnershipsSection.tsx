import { useEffect, useState } from "react";
import PartnerCard from "../../../funding-card/organism/PartnerCard";
import HomeSectionTitle from "../molecule/HomeSectionTitle";
import HorizontalScrollSection from "./HorizontalScrollSection";

export default function PartnershipsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/partnerships")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <HomeSectionTitle href="https://www.ohmycompany.com/partnership/partnerlist">
        오마이컴퍼니와 함께하는 파트너
      </HomeSectionTitle>
      <HorizontalScrollSection className="!gap-3">
        {data.map((card: any) => {
          return <PartnerCard key={card.contestSeq} {...card} />;
        })}
      </HorizontalScrollSection>
    </div>
  );
}
