"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductCard from "@/app/_components/ProductCard";
import { products } from "@/app/_data/products";

gsap.registerPlugin(ScrollTrigger);

function Products({ all_products = false, class_name = "" }) {
  const component = useRef(null);
  const router = useRouter();
  let num_of_items = 4;
  if (all_products) num_of_items = products.length;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title-our-products",
        { opacity: 0, y: 60 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.in",
          scrollTrigger: {
            trigger: ".title-our-products",
            start: "top bottom",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        },
      );

      return () => ctx.revert(); // Cleanup
    }, component);
  }, []);

  return (
    <section
      className={`mx-auto w-full text-center lg:px-big ${class_name}`}
      ref={component}
    >
      {!all_products && (
        <h1 className="title-our-products text-xl font-extrabold uppercase tracking-wide text-primary-heading-main md:mb-10 md:text-3xl">
          Our Products
        </h1>
      )}
      {products.slice(0, num_of_items).map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          image_reversed={product.id % 2 === 0}
        />
      ))}

      {!all_products && (
        <button
          onClick={() => router.push("/products")}
          className="group relative overflow-hidden rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-[500ms] ease-in-out hover:text-white md:my-2 md:text-base"
        >
          <span className="relative z-10">All Products</span>
          <span className="absolute left-0 top-0 h-[110%] w-[110%] -translate-x-full bg-primary-heading-main transition-transform duration-[500ms] ease-in-out group-hover:translate-x-0"></span>
        </button>
      )}
    </section>
  );
}

export default Products;
