import Link from "next/link";
import Logo from "../atom/Logo";

const footerSnsList = [
  {
    iconFilePath: "/assets/icons",
    iconFileName: "component.footer.sns.newsletter",
    href: "https://ohmarket.stibee.com/",
  },
  {
    iconFilePath: "/assets/icons",
    iconFileName: "component.footer.sns.channel",
    href: "https://pf.kakao.com/_xgUjxml",
  },
  {
    iconFilePath: "/assets/icons",
    iconFileName: "component.footer.sns.blog",
    href: "https://blog.naver.com/omcofficial",
  },
  {
    iconFilePath: "/assets/icons",
    iconFileName: "component.footer.sns.instagram",
    href: "https://www.instagram.com/oh_mycompany/#",
  },
  {
    iconFilePath: "/assets/icons",
    iconFileName: "component.footer.sns.facebook",
    href: "https://www.facebook.com/omc2012",
  },
];

export default function FooterImgs() {
  return (
    <div className="flex justify-between items-center pb-[5px]">
      <Logo width={164} height={29} />
      <ul className="flex justify-center items-center gap-3">
        {footerSnsList.map(({ iconFilePath, iconFileName, href }) => {
          return (
            <li key={iconFileName} className="w-5 h-5">
              <Link href={href}>
                <span
                  style={{
                    backgroundImage: `url(${iconFilePath}/${iconFileName}.svg)`,
                  }}
                  className="inline-block w-full h-full bg-contain bg-no-repeat bg-center"
                ></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
