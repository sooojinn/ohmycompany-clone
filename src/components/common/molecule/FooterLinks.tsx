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
    <ul className="mt-[25px] mb-2 -mx-[5px]">
      {footerLinks.map(({ label, href }) => (
        <li key={href} className="px-[5px] py-[3px] inline">
          <Link href={href} className="text-[13px] hover:underline p-[5px]">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
