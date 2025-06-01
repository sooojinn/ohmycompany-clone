"use client";

import MiddleBanner from "@/components/home/banner/MiddleBanner";
import SlideBannerContainer from "@/components/home/banner/SlideBannerContainer";
import NewFundingSection from "@/components/home/section/NewFundingSection";
import PopularFundingSection from "@/components/home/section/PopularFundingSection";
import RecommendedFundingSection from "@/components/home/section/RecommendedfundingSection";

export default function Home() {
  return (
    <div className="pt-10 relative">
      <div className="mb-15">
        <SlideBannerContainer />
      </div>
      <RecommendedFundingSection />
      <NewFundingSection />
      <PopularFundingSection />
      <MiddleBanner />
    </div>
  );
}
