import Image from "next/image";
import Link from "next/link";

function PageHeader({ image_url, title, page, product_id, product_name }) {
  return (
    <header className="relative flex h-32 w-screen items-center overflow-hidden md:h-52">
      <Image
        src={image_url ? image_url : "/clothes-3.jpg"}
        alt={title}
        width={2000}
        height={1000}
        className="overflow-hidden object-center"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-50"></div>
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white md:left-28">
        <h1 className="text-xl font-extrabold uppercase md:text-4xl">
          {title}
        </h1>
        <div className="text-xs md:text-base">
          <Link href={"/"}>Home/</Link>
          {page == "about" ? (
            <Link href={"/about"}>About</Link>
          ) : (
            <Link href={"/products"}>Products</Link>
          )}
          {page == "products" && product_id && (
            <Link href={`/products/${product_id}`}>/{product_name}</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
