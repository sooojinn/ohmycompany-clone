import { useEffect, useState } from "react";
import PartnerCard from "../../../funding-card/organism/PartnerCard";
import HomeSectionTitle from "../molecule/HomeSectionTitle";

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
      <div className="w-full flex gap-3 overflow-x-auto no-scrollbar">
        {data.map((card: any) => {
          return <PartnerCard key={card.contestSeq} {...card} />;
        })}
      </div>
    </div>
  );
}
