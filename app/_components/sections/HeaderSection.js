import Image from "next/image";

function HeaderSection() {
  return (
    <header className="w-screen h-96  overflow-hidden">
      <div className="w-screen h-96 relative flex items-center">
        <Image
          src={"/header.jpg"}
          alt={"header"}
          width={1500}
          height={1000}
          className="object-center"
        />
        <div className="bg-primary w-full h-full absolute top-0 left-0 opacity-50"></div>
      </div>
      <div className="text-white  absolute top-[35%] right-0 -translate-y-1/2 px-big w-[61%]">
        <h1 className="text-[2rem] font-extrabold">
          Profession Clean Washing Chemicals
        </h1>
        <p className="text-justify text-sm tracking-wide mb-2">
          We specialize in delivering high-quality cleaning chemicals tailored
          for commercial laundry operations.
        </p>

        <button className="bg-white relative text-primary my-2 uppercase tracking-wide py-2 px-4 font-bold rounded-sm overflow-hidden group hover:text-white transition-colors duration-[500ms] ease-in-out">
          <span className="relative z-10">Products</span>
          <span className="absolute top-0 left-0 w-[110%] h-full bg-primary-heading-main -translate-x-full group-hover:translate-x-0 transition-transform duration-[500ms] ease-in-out"></span>
        </button>
      </div>
    </header>
  );
}

export default HeaderSection;
