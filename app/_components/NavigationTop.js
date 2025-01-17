import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";

function NavigatoinTop() {
  return (
    <div className="w-screen sticky flex justify-between items-center text-white px-big bg-primary py-2">
      <div className="flex gap-1 items-center">
        <FaPhoneAlt className="text-xs" />
        <span className="font-semibold text-xs tracking-wideest">
          +0044 07515106586
        </span>
      </div>

      <div className="flex gap-3 items-center">
        <FaFacebook className=" text-lg" />
        <FaInstagram className="text-white text-xl" />
      </div>
    </div>
  );
}

export default NavigatoinTop;
