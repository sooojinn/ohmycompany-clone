"use client";

import AutoSlideSwiper from "./AutoSlideSwiper";
import { useQuery } from "@tanstack/react-query";

const fetchMainBigBanners = async () => {
  const response = await fetch("/api/main/banners/big");
  return response.json();
};

export default function SlideBannerContainer() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["main", "banner", "big"],
    queryFn: fetchMainBigBanners,
  });

  return (
    <>
      {isSuccess && <AutoSlideSwiper data={data} />}
      {isLoading && <div className="big-banner skeleton"></div>}
    </>
  );
}
