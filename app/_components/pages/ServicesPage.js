import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PiFlaskFill } from "react-icons/pi";
import { MdSupportAgent, MdOutlineModelTraining } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const ServicesPage = () => {
  const services = [
    {
      title: "Custom Chemical Formulations",
      description:
        "Every business is unique, and so are its cleaning needs. We specialize in developing custom chemical formulations tailored to your specific requirements, ensuring optimal performance for your laundry operations.",
      icon: <PiFlaskFill />,
    },
    {
      title: "Technical Support",
      description:
        "Our team of experts is always available to provide technical assistance. From selecting the right products to determining precise chemical dosing and implementing operational best practices, we're here to help you achieve efficiency and excellence.",
      icon: <MdSupportAgent />,
    },
    {
      title: "Staff Training",
      description:
        "Empower your team with the knowledge and skills they need to operate safely and efficiently. We offer detailed guides and training sessions to ensure proper handling of chemicals and best practices in laundry operations.",
      icon: <MdOutlineModelTraining />,
    },
    {
      title: "Reliable Delivery",
      description:
        "We understand the importance of timely supply. Our streamlined delivery service ensures your orders are shipped securely and arrive on time, helping you maintain smooth and uninterrupted operations.",
      icon: <TbTruckDelivery />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        <Image
          src="/clothes-1.jpg"
          alt="Laundry facility"
          width={1000}
          height={500}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-60">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-extrabold uppercase">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl px-2.5 text-xl md:px-0">
              At TradeGO Limited, we offer a comprehensive range of services
              designed to support your commercial laundry operations and ensure
              your business thrives.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-8 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 rounded-full bg-primary p-4 text-5xl text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase">
            Partner with TradeGO Limited
          </h2>
          <p className="mb-8 text-xl">
            Get tailored services and dependable support that keeps your
            business running at its best.
          </p>
          <Link
            href={"/contact"}
            className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
