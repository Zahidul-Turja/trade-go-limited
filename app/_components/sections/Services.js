import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineLocalHospital } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoMdBusiness } from "react-icons/io";

function Services() {
  return (
    <section className="mx-auto w-full bg-primary py-medium text-center text-white lg:px-big">
      <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wide">
        Our Services
      </h1>

      <p className="mx-auto w-[60%] text-base font-extralight text-white/80">
        At TradeGO Limited, we cater to a wide range of industries, providing
        specialized cleaning solutions to meet the distinct needs of each
        sector. Our expertise ensures that you achieve exceptional results,
        regardless of the scale or complexity of your laundry operations.
      </p>
      <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          icon={<LiaHandsHelpingSolid />}
          title="Hospitality"
          description="We help hotels, resorts, and other hospitality businesses create unforgettable guest experiences with perfectly laundered linens, towels, and uniforms. Our cleaning solutions deliver pristine freshness, softness, and longevity, elevating the standard of your service."
        />
        <ServiceCard
          icon={<MdOutlineLocalHospital />}
          title="Healthcare"
          description="Hygiene is paramount in healthcare, and our hospital-grade cleaning chemicals are designed to meet the strictest standards. From sanitizing patient bedding to maintaining staff uniforms, our products ensure safe, reliable, and effective cleaning for medical facilities."
        />
        <ServiceCard
          icon={<LiaIndustrySolid />}
          title="Industrial"
          description="For large-scale laundry operations handling heavy loads, we offer robust, heavy-duty cleaning solutions. Our products are engineered to tackle high volumes, tough stains, and intensive washing cycles while ensuring efficiency and cost-effectiveness."
        />
        <ServiceCard
          icon={<IoMdBusiness />}
          title="Specialty Businesses"
          description="We provide tailored cleaning products for niche industries such as spas, gyms, and salons. Whether it's ensuring the softness of spa towels or maintaining the freshness of gym wear, our solutions are designed to meet the specific demands of your business."
        />
      </div>
    </section>
  );
}

export default Services;

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-4 text-center text-white">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-primary">
        {icon}
      </div>
      <h2 className="mb-3 mt-6 text-xl font-bold">{title}</h2>
      <p className="px-2 text-sm font-light leading-7 text-white">
        {description}
      </p>
    </div>
  );
}
