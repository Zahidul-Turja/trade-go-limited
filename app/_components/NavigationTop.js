"use client";

import toast from "react-hot-toast";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

function NavigatoinTop() {
  return (
    <div className="sticky left-0 top-0 z-10 flex w-screen items-center justify-between bg-primary px-5 py-2 text-white md:px-small lg:px-big">
      <div
        className="flex cursor-pointer items-center gap-1"
        onClick={() => {
          navigator.clipboard.writeText("+0044 07515106586");
          toast.success("Phone number copied to clipboard");
        }}
      >
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
