import { ReactComponent as JNTO } from "../../assets/images/JNTO.svg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function FooterSNS() {
  return (
    <div className="flex items-center justify-between w-8/12 p-4 border-t-2 border-solid">
      <JNTO width="72px" />

      <div className="flex text-xl text-white">
        <a
          href="https://www.facebook.com/joinjroute/"
          className="hover:text-red-100"
        >
          <FaFacebookF className="ml-4 " />
        </a>

        <a
          href="https://www.instagram.com/jnto_join_jroute/"
          className="hover:text-red-100"
        >
          <FaInstagram className="ml-4 " />
        </a>

        <a
          href="https://www.youtube.com/channel/UChFpLm_nPFZlLXNcCpLPa-A"
          className="hover:text-red-100"
        >
          <FaYoutube className="ml-4 " />
        </a>
      </div>
    </div>
  );
}

export default FooterSNS;
