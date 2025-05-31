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
        className="w-full h-[400px] bg-cover bg-center rounded-4xl relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className="absolute left-10 bottom-10 z-20"
          style={{ color: `${textColor}` }}
        >
          <p className="text-[28px] font-bold mb-5 whitespace-pre-line">
            {title}
          </p>
          <p className="text-lg font-semibold">{communityDesc}</p>
        </div>
        <div
          style={{
            background: `linear-gradient(to top, ${bgColor} 40%, transparent 100%)`,
          }}
          className="w-full h-[130px] absolute bottom-0 z-10 rounded-b-4xl opacity-20"
        ></div>
      </div>
    </Link>
  );
}
