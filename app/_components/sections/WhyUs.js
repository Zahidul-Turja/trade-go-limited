import { BsFillLightningChargeFill } from "react-icons/bs";
import { VscBeaker } from "react-icons/vsc";
import { FaRecycle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

function WhyUs() {
  return (
    <section className="w-full text-center py-medium lg:px-big mx-auto">
      <h1 className="tranking-wide text-3xl uppercase font-extrabold text-primary-heading-main mb-4">
        Why Choose Us
      </h1>
      <p className="w-[60%] mx-auto text-base text-gray-700">
        At TradeGO Limited, we understand the unique needs of commercial laundry
        operations and are committed to providing solutions that drive
        efficiency, quality, and satisfaction.
      </p>
      <div className="grid w-full md:grid-cols-2  grid-cols-1 lg:grid-cols-4 gap-4 mt-8 mx-auto">
        <WhyUsCard
          icon={<BsFillLightningChargeFill />}
          title="High Performance"
          description="Our cleaning chemicals are expertly formulated to tackle even the toughest stains while preserving fabric integrity. With every wash, you can expect brilliant, consistent results that exceed expectations."
        />
        <WhyUsCard
          icon={<VscBeaker />}
          title="Custom Solutions"
          description="Every business is different, and we tailor our products and dosing solutions to meet the specific requirements of your industry. Whether you're managing hotel linens or hospital scrubs, we have the right solution for you."
        />
        <WhyUsCard
          icon={<FaRecycle />}
          title="Eco-Friendly"
          description="Sustainability is at the heart of our operations. We offer biodegradable and low-impact cleaning chemicals that align with environmental standards, helping you reduce your ecological footprint without compromising on performance."
        />
        <WhyUsCard
          icon={<TbTruckDelivery />}
          title="Fast Delivery"
          description="We value your time. Place your order by 11 AM, and we'll ensure delivery within 24 hours for most locations, so you can keep your operations running smoothly."
        />
      </div>
    </section>
  );
}

export default WhyUs;

function WhyUsCard({ icon, title, description }) {
  return (
    <div className=" text-center p-4">
      <div className="text-3xl justify-center rounded-full bg-primary text-white w-16 h-16 mx-auto items-center flex">
        {icon}
      </div>
      <h2 className="font-bold text-xl text-gray-800 mt-6 mb-3">{title}</h2>
      <p className="text-gray-600 px-2 leading-7">{description}</p>
    </div>
  );
}
