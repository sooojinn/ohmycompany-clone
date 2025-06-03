import HeaderNavigation from "../molecule/HeaderNavigation";
import Logo from "../atom/Logo";
import SearchIcon from "@/assets/icons/SearchIcon";
import HeaderMenuIcon from "@/assets/icons/HeaderMenuIcon";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full py-5.5 shadow-sm">
      <header className="flex justify-between m-auto container-w px-3.75">
        <nav className="flex gap-10">
          <Logo className="w-39 h-6 lg:w-46.75 lg:h-8.25" />
          <HeaderNavigation />
        </nav>
        <nav className="flex gap-7 items-center text-sm">
          <SearchIcon />
          <HeaderMenuIcon className="lg:hidden" />
          <Link
            href="https://account.ohmycompany.com/login?redirectUrl=aHR0cHM6Ly93d3cub2hteWNvbXBhbnkuY29tL3JlZGlyZWN0L2xvZ2luP2Rlc3RVcmw9THc"
            className="max-lg:hidden"
          >
            로그인
          </Link>
          <div className="py-2.75 px-3.5 bg-primary rounded-sm leading-6 text-white cursor-pointer max-lg:hidden">
            펀딩 신청하기
          </div>
        </nav>
      </header>
    </div>
  );
}
