"use client";

import MiddleBanner from "@/components/home/banner/MiddleBanner";
import SlideBannerContainer from "@/components/home/banner/SlideBannerContainer";
import NewFundingSection from "@/components/home/section/organism/NewFundingSection";
import NewsSection from "@/components/home/section/organism/NewsSection";
import PopularFundingSection from "@/components/home/section/organism/PopularFundingSection";
import RecommendedFundingSection from "@/components/home/section/organism/RecommendedfundingSection";
import ReservationFundingSection from "@/components/home/section/organism/ReservationFundingSection";

export default function Home() {
  return (
    <div className="pt-10">
      <div className="mb-15">
        <SlideBannerContainer />
      </div>
      <RecommendedFundingSection />
      <NewFundingSection />
      <PopularFundingSection />
      <MiddleBanner />
      <ReservationFundingSection />
      <NewsSection />
    </div>
  );
}
