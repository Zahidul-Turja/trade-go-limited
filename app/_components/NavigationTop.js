import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

function NavigatoinTop() {
  return (
    <div className="sticky flex w-screen items-center justify-between bg-primary px-5 py-2 text-white md:px-small lg:px-big">
      <div className="flex items-center gap-1">
        <FaPhoneAlt className="text-xs" />
        <span className="tracking-wideest text-xs font-semibold">
          +0044 07515106586
        </span>
      </div>

      <div className="flex items-center gap-3">
        <FaFacebook className="text-lg" />
        <FaInstagram className="text-xl text-white" />
        <FaTwitter className="text-lg text-white" />
      </div>
    </div>
  );
}

export default NavigatoinTop;
