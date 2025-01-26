"use client";

import { useParams } from "next/navigation";

import { products } from "@/app/_data/products";
import PageHeader from "../PageHeader";

function ProductDetailsPage() {
  const params = useParams();
  const product = products[params.id - 1];
  return (
    <>
      <PageHeader
        image_url={"/clothes.jpg"}
        title={product.title}
        page={"products"}
        product_id={product.id}
        product_name={product.title}
      />
    </>
  );
}

export default ProductDetailsPage;
