import Image from "next/image";

function HeaderSection() {
  return (
    <header className="h-72 w-screen overflow-hidden md:h-96">
      <div className="relative flex h-72 w-screen items-center md:h-96">
        <Image
          src={"/header.jpg"}
          alt={"header"}
          width={2000}
          height={1000}
          className="object-center"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-50"></div>
      </div>
      <div className="absolute right-0 top-[22%] w-full -translate-y-1/2 px-5 text-white md:top-[35%] md:w-[70%] md:px-small lg:w-[58%] lg:px-big">
        <h1 className="text-xl font-extrabold md:text-[2rem]">
          Profession Clean Washing Chemicals
        </h1>
        <p className="mb-2 text-justify text-xs tracking-wide md:text-sm">
          We specialize in delivering high-quality cleaning chemicals tailored
          for commercial laundry operations.
        </p>

        <button className="group relative my-2 overflow-hidden rounded-sm bg-white px-2 py-1 text-xs font-bold uppercase tracking-wide text-primary transition-colors duration-[500ms] ease-in-out hover:text-white md:px-4 md:py-2 md:text-base">
          <span className="relative z-10">Products</span>
          <span className="absolute left-0 top-0 h-[110%] w-[110%] -translate-x-full bg-primary-heading-main transition-transform duration-[500ms] ease-in-out group-hover:translate-x-0"></span>
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;
