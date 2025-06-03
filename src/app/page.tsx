"use client";

import Footer from "@/components/common/organism/Footer";
import MiddleBanner from "@/components/home/banner/MiddleBanner";
import SlideBannerContainer from "@/components/home/banner/SlideBannerContainer";
import HomeNavigation from "@/components/home/section/molecule/HomeNavigation";
import NewFundingSection from "@/components/home/section/organism/NewFundingSection";
import NewsSection from "@/components/home/section/organism/NewsSection";
import PartnershipsSection from "@/components/home/section/organism/PartnershipsSection";
import PopularFundingSection from "@/components/home/section/organism/PopularFundingSection";
import RecommendedFundingSection from "@/components/home/section/organism/RecommendedfundingSection";
import ReservationFundingSection from "@/components/home/section/organism/ReservationFundingSection";

export default function Home() {
  return (
    <div className="pt-10">
      <div className="mb-15">
        <SlideBannerContainer />
      </div>
      <HomeNavigation />
      <div className="flex flex-col gap-17 md:pb-17">
        <RecommendedFundingSection />
        <NewFundingSection />
        <PopularFundingSection />
        <MiddleBanner />
        <ReservationFundingSection />
        <div className="flex flex-col gap-12 max-md:bg-[#F1F9F7] max-md:-mx-3.75 max-md:px-3.75 max-md:py-8.75 max-md:rounded-t-4xl">
          <NewsSection />
          <PartnershipsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
