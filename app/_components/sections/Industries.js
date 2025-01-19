import { BsFillLightningChargeFill } from "react-icons/bs";
import { VscBeaker } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function Industries() {
  return (
    <section className="mx-auto w-full py-medium text-center lg:px-big">
      <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-wide text-primary-heading-main">
        Industries We Serve
      </h1>
      <p className="mx-auto w-[60%] text-base text-gray-700">
        At TradeGO Limited, we cater to a wide range of industries, providing
        specialized cleaning solutions to meet the distinct needs of each
        sector. Our expertise ensures that you achieve exceptional results,
        regardless of the scale or complexity of your laundry operations.
      </p>
      <div className="mx-auto mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <IndustryCard
          icon={<BsFillLightningChargeFill />}
          title="High Performance"
          description="Our cleaning chemicals are expertly formulated to tackle even the toughest stains while preserving fabric integrity. With every wash, you can expect brilliant, consistent results that exceed expectations."
        />
        <IndustryCard
          icon={<VscBeaker />}
          title="Custom Solutions"
          description="Every business is different, and we tailor our products and dosing solutions to meet the specific requirements of your industry. Whether you're managing hotel linens or hospital scrubs, we have the right solution for you."
        />
        <IndustryCard
          icon={<FaRecycle />}
          title="Eco-Friendly"
          description="Sustainability is at the heart of our operations. We offer biodegradable and low-impact cleaning chemicals that align with environmental standards, helping you reduce your ecological footprint without compromising on performance."
        />
        <IndustryCard
          icon={<TbTruckDelivery />}
          title="Fast Delivery"
          description="We value your time. Place your order by 11 AM, and we'll ensure delivery within 24 hours for most locations, so you can keep your operations running smoothly."
        />
      </div>
    </section>
  );
}

export default Industries;

function IndustryCard({ icon, title, description }) {
  return (
    <div className="p-4 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-3xl text-white">
        {icon}
      </div>
      <h2 className="mb-3 mt-6 text-xl font-bold text-gray-800">{title}</h2>
      <p className="px-2 leading-7 text-gray-600">{description}</p>
    </div>
  );
}
