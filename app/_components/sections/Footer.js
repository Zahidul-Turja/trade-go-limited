"use client";

import Link from "next/link";
import toast from "react-hot-toast";

function Footer() {
  return (
    <footer
      id="footer"
      className="mx-auto w-screen bg-primary-footer px-5 py-10 text-center md:px-medium md:py-medium lg:px-big"
    >
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <NavigationColumn />
        <ServicesColumn />
        <ContactColumn />
      </div>
      <div className="mt-7 h-2 w-full border-t border-white pt-4 font-extralight text-white">
        <span className="text-xs font-bold uppercase tracking-widest">
          TradeGo Limited{" "}
        </span>{" "}
        &copy; 2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

function NavigationColumn() {
  return (
    <div className="text-center md:text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Navigation
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-center text-base font-thin tracking-wider text-white md:text-left">
        <Link href={"/about"} className="hover:text-primary-heading-second">
          About Us
        </Link>
        <Link href={"/products"} className="hover:text-primary-heading-second">
          Products
        </Link>
        <Link
          href={"/#industries"}
          className="hover:text-primary-heading-second"
        >
          Industries we serve
        </Link>
        <Link href={"/#faqs"} className="hover:text-primary-heading-second">
          FAQs
        </Link>
      </div>
    </div>
  );
}

function ServicesColumn() {
  return (
    <div className="md:text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Services
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-base font-thin tracking-wider text-white md:text-left">
        <p>Technical Support</p>
        <p>Custom Solutions</p>
        <p>Training Staff</p>
        <p>Reliable Delivery</p>
      </div>
    </div>
  );
}

function ContactColumn() {
  return (
    <div className="md:text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Get in touch
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-base font-thin tracking-wider text-white md:text-left">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("+0044 07515106586");
            toast.success("Phone number copied to clipboard");
          }}
        >
          +0044 07515106586
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText("info@tradegolimited.co.uk");
            toast.success("Email copied to clipboard");
          }}
        >
          info@tradegolimited.co.uk
        </p>
        <p className="">135 Tiptree Crescent, Ilford IG5 0SX, United Kingdom</p>
        <Link
          href={"https://www.tradegolimited.co.uk"}
          target="_blank"
          className="hover:text-primary-heading-second"
        >
          <span>www.tradegolimited.co.uk</span>
        </Link>
      </div>
    </div>
  );
}
