import { NextResponse } from "next/server";

const body = [
  {
    imageUrl:
      "https://www.ohmycompany.com/uploads/banner/BANNER_20250526054011001f68.jpg",
    title: "18살 작가들이 전하는 \r\n제주항공 참사 추모 동화",
    textColor: "#000000",
    bgColor: "#FFFFF",
    bannerUrl: "https://www.ohmycompany.com/reward/16310",
    communityDesc: "살아가는 모든 \u0027맑음이\u0027들에게 따뜻한 위로를",
  },
  {
    imageUrl:
      "https://www.ohmycompany.com/uploads/banner/BANNER_2025052605395920630a.jpg",
    title: "편백 한 장으로 \r\n진정·보습·미백·탄력까지 싹! ",
    textColor: "#000000",
    bgColor: "#FFFFF",
    bannerUrl: "https://www.ohmycompany.com/reward/16312",
    communityDesc: "슈퍼얼리버드 40% 할인 + 5,000원 쿠폰",
  },
  {
    imageUrl:
      "https://www.ohmycompany.com/uploads/banner/BANNER_20250526015351227a8e.jpg",
    title: "발달장애인 정성이 담긴 \r\n좋은날 드립백 선물세트",
    textColor: "#000000",
    bgColor: "#FFFFF",
    bannerUrl: "https://www.ohmycompany.com/reward/16315",
    communityDesc: "선착순 5,000원 할인쿠폰도 함께 만나요!",
  },
  {
    imageUrl:
      "https://www.ohmycompany.com/uploads/banner/BANNER_20250519100200779b6e.jpg",
    title: "전세사기, 시민이 나서서 \r\n대안만든다!",
    textColor: "#FFFFFF",
    bgColor: "#000000",
    bannerUrl: "https://www.ohmycompany.com/reward/16308",
    communityDesc: "시민 연구자분들의 든든한 동료가 되어주세요",
  },
  {
    imageUrl:
      "https://www.ohmycompany.com/uploads/banner/BANNER_20250519113413300871.jpg",
    title: "최대 400만원 지원에 \r\n컨설팅+광고까지!\r\n",
    textColor: "#FFFFFF",
    bgColor: "#000000",
    bannerUrl: "https://www.ohmycompany.com/community/notice/21398",
    communityDesc: "2025년 농식품 크라우드펀딩 참여기업 모집",
  },
];

export async function GET() {
  return NextResponse.json(body);
}
