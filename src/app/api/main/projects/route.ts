import { NextResponse } from "next/server";

const body = [
  {
    projectSeq: 16311,
    projectCate: "소셜·캠페인",
    projectType: "reward",
    thumbImageUrl:
      "https://ohmycompany.imgix.net/uploads/reward/img/2025/05/16311/REWARD_5fe8714c703e.png?lossless=1&h=450",
    builderSeq: "310143",
    projectName: "불타버린 숲, 남겨진 생명",
    simpleText: "산불 피해 동물들을 위한 티셔츠",
    builderName: "숨결:온",
    projectSubText: "쌀",
    fundingType: "성공해야 리워드",
    investAmt: 524000,
    targetAmt: 500000,
    per: 104,
    dday: 10,
    mainImagePosition: "",
    builderImageUrl:
      "https://ohmycompany.imgix.net/uploads/member/profile/MEMBER_54f48cf8610e.png",
    linkUrl: "/reward/16311",
    projectTitle: "",
  },
  {
    projectSeq: 390,
    projectCate: "문화예술",
    projectType: "invest",
    thumbImageUrl:
      "https://ohmycompany.imgix.net/uploads/invest/main/MAIN_20250320104027635b23.PNG?lossless=1&h=450",
    builderSeq: "322525",
    projectName: "아트맵퍼, 미디어아트 맵핑 솔루션 어플리케이션",
    simpleText: "아트맵퍼, 미디어아트 맵핑 솔루션 어플리케이션",
    builderName: "주식회사 이도콘텐츠랩",
    builderFilePath: "/uploads/member/profile/MEMBER_202503261153303014f7.png",
    projectSubText: "휴대폰지문인식",
    investAmt: 12000000,
    targetAmt: 100000000,
    per: 12,
    dday: 30,
    mainImagePosition: "",
    builderImageUrl:
      "https://ohmycompany.imgix.net/uploads/member/profile/MEMBER_202503261153303014f7.png",
    linkUrl: "/invest/390",
    projectTitle: "",
  },
  {
    projectSeq: 16296,
    projectCate: "문화·출판",
    projectType: "reward",
    thumbImageUrl:
      "https://ohmycompany.imgix.net/uploads/reward/img/2025/04/16296/REWARD_202505120304244426c8.jpg?lossless=1&h=450",
    builderSeq: "327000",
    projectName: "프리미엄 전통 종지윷 ‘오복윷놀이’",
    simpleText: "전통의 가치를 놀이로 선물하다!",
    builderName: "다올문화협동조합",
    builderFilePath: "/uploads/member/profile/MEMBER_629bc542ddbe.png",
    projectSubText:
      "시민이 참여하는 연구, 좋은 정책을 만드는 진짜 연구에 펀딩해주세요.",
    fundingType: "무조건 리워드",
    investAmt: 1270000,
    targetAmt: 1000000,
    per: 127,
    dday: 7,
    mainImagePosition: "",
    builderImageUrl:
      "https://ohmycompany.imgix.net/uploads/member/profile/MEMBER_629bc542ddbe.png",
    linkUrl: "/reward/16296",
    projectTitle: "",
  },
  {
    projectSeq: 16248,
    projectCate: "여행·체험",
    projectType: "reward",
    thumbImageUrl:
      "https://ohmycompany.imgix.net/uploads/reward/img/2025/04/16248/REWARD_2682b402d6ed.png?lossless=1&h=450",
    builderSeq: "327367",
    projectName: "엄마의 두 번째 봄을 위한 마음돌봄, 명상힐링여행",
    simpleText: "멘탈웰 솔루션 트립",
    builderName: "아루나찰라",
    builderFilePath: "/uploads/member/profile/MEMBER_13a9595c07c0.png",
    projectSubText: "달력",
    fundingType: "무조건 리워드",
    investAmt: 569000,
    targetAmt: 500000,
    per: 113,
    dday: 8,
    mainImagePosition: "",
    builderImageUrl:
      "https://ohmycompany.imgix.net/uploads/member/profile/MEMBER_13a9595c07c0.png",
    linkUrl: "/reward/16248",
    projectTitle: "",
  },
];

export async function GET() {
  return NextResponse.json(body);
}
