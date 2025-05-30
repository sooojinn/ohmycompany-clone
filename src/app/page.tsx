import HeaderNav from "@/components/common/atom/HeaderNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full py-5.5 shadow-sm">
      <header className="flex gap-10 w-[1110px] m-auto">
        <Image
          src="https://www.ohmycompany.com/assets/img/common.logo.svg"
          width={197}
          height={33}
          alt="ohmycompany"
        />
        <nav className="flex justify-between align-center flex-grow">
          <div className="flex gap-5 align-center">
            <HeaderNav href="/reward/list">후원하기</HeaderNav>
            <HeaderNav href="/invest/list">투자하기</HeaderNav>
            <HeaderNav href="reservation/list">오픈예정</HeaderNav>
            <HeaderNav href="https://corp.ohmycompany.com/guide">
              가이드
            </HeaderNav>
          </div>
          <div className="flex gap-5 align-center text-sm">
            <span>로그인</span>
            <button className="py-2.5 px-3.5 bg-green-400 rounded-sm text-white">
              펀딩 신청하기
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
