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
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-auto lg:h-75 bg-[#F2F9F7]">
      <div className="container-w h-full m-auto px-3.75 py-8.75 flex max-lg:flex-col gap-3 lg:gap-15">
        {isSuccess && (
          <>
            <Link href={bannerUrl} className="flex-shrink-0 max-lg:order-2">
              <Image
                src={imageUrl}
                width={510}
                height={230}
                alt={imageSaveName}
                className="rounded-2xl shadow-lg w-full lg:w-127.5 lg:h-57.5"
              />
            </Link>
            <div className="lg:py-8 flex flex-col justify-between max-lg:order:1">
              <Link href={bannerUrl}>
                <p className="text-lg lg:text-2xl font-medium">{title}</p>
                <p className="text-sm lg:text-lg text-gray-600 mt-1.25">
                  {communityDesc}
                </p>
              </Link>
              <Link
                href={bannerUrl}
                className="max-lg:hidden px-4 py-2 w-fit bg-white text-gray-600 text-sm flex gap-2 items-center rounded-full border border-gray-200"
              >
                <span>지금 바로가기</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
