import { BannerBigInfo } from "@/types/banner";
import Link from "next/link";

export default function SlideBanner({
  imageUrl,
  title,
  bannerUrl,
  textColor,
  bgColor,
  communityDesc,
}: BannerBigInfo) {
  return (
    <Link href={bannerUrl}>
      <div
        className="big-banner bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className="w-full absolute bottom-6 lg:bottom-10 max-lg:text-center lg:left-10 z-20"
          style={{ color: `${textColor}` }}
        >
          <p className="text-[1.5rem] lg:text-[1.75rem] font-bold mb-2 lg:mb-5 whitespace-pre-line">
            {title}
          </p>
          <p className="lg:text-lg font-semibold">{communityDesc}</p>
        </div>
        <div
          style={{
            background: `linear-gradient(to top, ${bgColor} 40%, transparent 100%)`,
          }}
          className="w-full h-32.5 absolute bottom-0 z-10 rounded-b-4xl opacity-20"
        ></div>
      </div>
    </Link>
  );
}
