import HeaderNavigation from "../molecule/HeaderNavigation";
import Logo from "../atom/Logo";

export default function Header() {
  return (
    <div className="w-screen py-5.5 shadow-sm">
      <header className="flex gap-10 w-[1110px] items-start m-auto">
        <Logo width={187} height={33} />
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
