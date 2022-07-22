import FooterLink from "./FooterLink";
import FooterSNS from "./FooterSNS";
import FooterCopyRight from "./FooterCopyRight";

function Footer() {
  return (
    <div className="flex flex-wrap justify-center w-screen bg-red-400">
      <FooterLink />

      <FooterSNS />

      <FooterCopyRight />
    </div>
  );
}

export default Footer;
