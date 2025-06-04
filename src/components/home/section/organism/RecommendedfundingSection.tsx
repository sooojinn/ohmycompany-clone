"use client";

import HomeSectionTitle from "../molecule/HomeSectionTitle";
import RecommendedFundingCard from "@/components/funding-card/organism/RecommendedFundingCard";
import RecommendedSectionSkeleton from "@/components/skeleton/RecommendedSectionSkeleton";
import { useQuery } from "@tanstack/react-query";

const fetchRecommendFundings = async () => {
  const response = await fetch(
    "/api/main/projects?category=recommend&projectType=reward"
  );
  return response.json();
};

export default function RecommendedFundingSection() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["main", "fundings", "recommend"],
    queryFn: fetchRecommendFundings,
  });

  return (
    <div>
      {isSuccess && (
        <>
          <HomeSectionTitle>지금, 참여해야 할 추천 펀딩</HomeSectionTitle>
          <div className="w-full flex gap-6 max-lg:flex-col">
            {data.map((card: any) => {
              return (
                <RecommendedFundingCard
                  key={card.projectSeq}
                  {...card}
                  hideDesc
                />
              );
            })}
          </div>
        </>
      )}
      {isLoading && <RecommendedSectionSkeleton />}
    </div>
  );
}
