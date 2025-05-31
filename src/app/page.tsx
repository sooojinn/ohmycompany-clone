"use client";

import SlideBannerContainer from "@/components/home/banner/SlideBannerContainer";
import RecommendedFundingSection from "@/components/home/section/RecommendedfundingSection";

export default function Home() {
  return (
    <div className="pt-10">
      <div className="mb-15">
        <SlideBannerContainer />
      </div>
      <RecommendedFundingSection />
    </div>
  );
}
