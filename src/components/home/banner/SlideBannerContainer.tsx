"use client";

import { useEffect, useState } from "react";
import AutoSlideSwiper from "./AutoSlideSwiper";

export default function SlideBannerContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/main/banners/big")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <AutoSlideSwiper data={data} />;
}
