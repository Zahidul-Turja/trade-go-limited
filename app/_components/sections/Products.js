import ProductCard from "@/app/_components/ProductCard";

import { products as p } from "@/app/_data/products";

function Products() {
  return (
    <section className="mx-auto w-full text-center lg:px-big">
      <h1 className="text-xl font-extrabold uppercase tracking-wide text-primary-heading-main md:mb-10 md:text-3xl">
        Our Products
      </h1>
      {p.slice(0, 4).map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          image_reversed={product.id % 2 === 0}
        />
      ))}

      <button className="group relative overflow-hidden rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-[500ms] ease-in-out hover:text-white md:my-2 md:text-base">
        <span className="relative z-10">All Products</span>
        <span className="absolute left-0 top-0 h-[110%] w-[110%] -translate-x-full bg-primary-heading-main transition-transform duration-[500ms] ease-in-out group-hover:translate-x-0"></span>
      </button>
    </section>
  );
}

export default Products;
