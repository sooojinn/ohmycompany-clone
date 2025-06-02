import HeaderNav from "../atom/HeaderNav";

const navList = [
  { label: "후원하기", href: "/reward/list" },
  { label: "투자하기", href: "/invest/list" },
  { label: "오픈예정", href: "/reservation/list" },
  { label: "가이드", href: "https://corp.ohmycompany.com/guide" },
];

export default function HeaderNavigation() {
  return (
    <div className="flex gap-7 items-center max-lg:hidden">
      {navList.map(({ label, href }) => (
        <HeaderNav key={href} href={href}>
          {label}
        </HeaderNav>
      ))}
    </div>
  );
}
