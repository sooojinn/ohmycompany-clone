import FooterNotice from "../molecule/FooterNotice";
import FooterLinks from "../molecule/FooterLinks";
import FooterImgs from "../molecule/FooterImgs";
import FooterTexts from "../molecule/FooterTexts";

export default function Footer() {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen pt-10 pb-[35px] bg-[#F8F9FA]">
      <div className="container-w m-auto">
        <FooterNotice />
        <FooterLinks />
        <FooterImgs />
        <FooterTexts />
      </div>
    </div>
  );
}
