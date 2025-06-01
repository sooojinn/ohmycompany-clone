import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import SlideBanner from "./SlideBanner";
import { BannerBigInfo } from "@/types/banner";
import { useState } from "react";
import SliderPagnation from "./SliderPagnation";

export default function AutoSlideSwiper({ data }: { data: BannerBigInfo[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.realIndex);
      }}
      className="relative"
    >
      <SliderPagnation>
        {currentIndex + 1} / {data.length}
      </SliderPagnation>
      {data.map((bannerInfo, index) => {
        return (
          <SwiperSlide key={`${index + 1}`}>
            <SlideBanner {...bannerInfo} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
