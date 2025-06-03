import NavItem from "../atom/NavItem";

const homeNavigationList = [
  {
    category: "reward",
    label: "후원하기",
    href: "https://www.ohmycompany.com/reward/list",
  },
  {
    category: "invest",
    label: "투자하기",
    href: "https://www.ohmycompany.com/invest/list",
  },
  {
    category: "reservation",
    label: "오픈예정",
    href: "https://www.ohmycompany.com/reservation/list",
  },
  {
    category: "partnership",
    label: "선물전",
    href: "https://www.ohmycompany.com/partnership/756/reward",
  },
];

export default function HomeNavigation() {
  return (
    <div className="w-full flex justify-between mb-12 lg:hidden">
      {homeNavigationList.map(({ category, label, href }) => (
        <NavItem key={href} category={category} href={href}>
          {label}
        </NavItem>
      ))}
    </div>
  );
}
