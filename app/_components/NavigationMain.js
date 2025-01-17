import Image from "next/image";
import Link from "next/link";

function NavigationMain() {
  return (
    <nav className="w-screen bg-white text-gray-800 px-big py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 relative -translate-x-[0.12rem]">
          <Image
            src={"/logo-large.png"}
            alt={"logo"}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h3 className="font-extrabold text-base text-primary-heading-main">
          TradeGo Limited
        </h3>
      </div>

      <div className="flex items-center gap-8 text-xs font-semibold">
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="#services">Services</Link>
        <Link href="#faqs">FAQs</Link>
        <Link href="#footer">Contact</Link>
      </div>
    </nav>
  );
}

export default NavigationMain;
