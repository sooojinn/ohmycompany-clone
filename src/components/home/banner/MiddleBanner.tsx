import ArrowIcon from "@/assets/icons/ArrowIcon";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Banner {
  imageUrl: string;
  imageSaveName: string;
}

export default function MiddleBanner() {
  const [data, setData] = useState<any>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/main/banners/middle")
      .then((res) => res.json())
      .then((data: Banner[]) => {
        setData(data[0]);
        setIsSuccess(true);
      })
      .catch(() => {
        setIsSuccess(false);
      });
  }, []);

  const { imageUrl, imageSaveName, title, bannerUrl, communityDesc } = data;

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[300px] bg-[#F2F9F7] mb-17">
      <div className="w-[1140px] h-full m-auto py-[35px] flex gap-15">
        {isSuccess && (
          <>
            <Link href={bannerUrl}>
              <Image
                src={imageUrl}
                width={510}
                height={230}
                alt={imageSaveName}
              />
            </Link>
            <div className="py-8 flex flex-col justify-between">
              <Link href={bannerUrl}>
                <p className="text-2xl font-medium">{title}</p>
                <p className="text-lg text-gray-600 mt-[5px]">
                  {communityDesc}
                </p>
              </Link>
              <Link
                href={bannerUrl}
                className="px-4 py-2 w-fit bg-white text-gray-600 text-sm flex gap-2 items-center rounded-full border border-gray-200"
              >
                <span>지금 바로가기</span>
                <ArrowIcon />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
