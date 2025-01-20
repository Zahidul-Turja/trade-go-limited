"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationMain() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex w-screen items-center justify-between bg-white px-5 py-2 text-gray-600 md:px-small lg:px-big">
      <div className="flex items-center gap-2">
        <div className="relative h-6 w-6 -translate-x-[0.12rem]">
          <Image
            src={"/logo-large.png"}
            alt={"logo"}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h3 className="text-base font-extrabold text-primary-heading-main">
          TradeGo Limited
        </h3>
      </div>

      <div className="flex items-center gap-12 text-xs font-bold">
        <Link
          href="/"
          className={`border-b-2 px-1 transition-all duration-300 ease-in-out hover:text-primary-heading-main ${
            pathname === "/" && "border-primary text-primary-heading-main"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`transition-all duration-300 ease-in-out hover:text-primary-heading-main`}
        >
          About
        </Link>
        <Link href="/products">Products</Link>
        <Link href="#services">Services</Link>
        <Link href="#faqs">FAQs</Link>
        <Link href="#footer">Contact</Link>
      </div>
    </nav>
  );
}

export default NavigationMain;
