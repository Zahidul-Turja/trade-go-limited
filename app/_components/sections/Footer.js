import Link from "next/link";

function Footer() {
  return (
    <footer className="mx-auto w-full bg-primary-footer py-medium text-center lg:px-big">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <NavigationColumn />
        <ServicesColumn />
        <ContactColumn />
      </div>
      <div className="mt-7 h-2 w-full border-t border-white pt-4 text-white">
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
    <div className="text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Navigation
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-left text-base font-medium tracking-wider text-white">
        <Link href={"/"} className="hover:text-primary-heading-second">
          About Us
        </Link>
        <Link href={"/"} className="hover:text-primary-heading-second">
          Products
        </Link>
        <a href="#" className="hover:text-primary-heading-second">
          Industries we serve
        </a>
        <a href="#" className="hover:text-primary-heading-second">
          FAQs
        </a>
      </div>
    </div>
  );
}

function ServicesColumn() {
  return (
    <div className="text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Services
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-left text-base font-medium tracking-wider text-white">
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
    <div className="text-left">
      <h2 className="text-xl font-extrabold uppercase tracking-wider text-primary-heading-second">
        Get in touch
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-left text-base tracking-wider text-white">
        <p className="">
          <span className="font-semibold">Phone: </span> +0044 07515106586
        </p>
        <p className="">
          <span className="font-semibold">Email: </span>{" "}
          info@tradegolimited.co.uk
        </p>
        <p className="">
          <span className="font-semibold">Address: </span> 135 Tiptree Crescent,
          Ilford IG5 0SX, United Kingdom
        </p>
        <Link
          href="#"
          target="_blank"
          className="hover:text-primary-heading-second"
        >
          <span className="font-semibold">Website: </span>{" "}
          <span>www.tradegolimited.co.uk</span>
        </Link>
      </div>
    </div>
  );
}