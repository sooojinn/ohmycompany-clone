import Link from "next/link";

const footerLinks = [
  { label: "홈으로", href: "/" },
  { label: "회사 소개", href: "https://corp.ohmycompany.com/intro" },
  { label: "이용약관", href: "https://www.ohmycompany.com/policy/terms" },
  {
    label: "개인정보보호정책",
    href: "https://www.ohmycompany.com/policy/rewardPrivacy",
  },
  { label: "이용가이드", href: "https://corp.ohmycompany.com/guide" },
];

export default function FooterLinks() {
  return (
    <ul className="mb-2 relative left-[-10px] md:max-lg:text-center md:max-lg:mb-3.75 max-md:hidden">
      {footerLinks.map(({ label, href }) => (
        <li key={href} className="px-1.25 py-0.75 inline">
          <Link href={href} className="text-[0.78rem] hover:underline p-0.75">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
