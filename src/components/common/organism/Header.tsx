import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "../mocule/HeaderNavigation";

export default function Header() {
  return (
    <div className="w-full py-5.5 shadow-sm">
      <header className="flex gap-10 w-[1110px] items-start m-auto">
        <Link href="/">
          <Image
            src="https://www.ohmycompany.com/assets/img/common.logo.svg"
            width={187}
            height={33}
            alt="ohmycompany"
          />
        </Link>
        <nav className="flex justify-between align-center flex-grow">
          <HeaderNavigation />
          <div className="flex gap-7 items-center text-sm">
            <span className="cursor-pointer">로그인</span>
            <div className="py-2.75 px-3.5 bg-primary rounded-sm leading-[1.5] text-white cursor-pointer">
              펀딩 신청하기
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
