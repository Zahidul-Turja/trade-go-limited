import Image from "next/image";
import Link from "next/link";

function ProductCard({
  id,
  image,
  title,
  description,
  image_reversed = false,
}) {
  return (
    <div
      className={`my-0 flex flex-col items-start justify-between px-5 md:flex-row md:px-small ${
        image_reversed && "md:flex-row-reverse"
      }`}
    >
      <div className="my-6 w-full text-left md:my-0 md:w-[50%] lg:w-[70%]">
        <Link
          href={`/products/${id}`}
          className="mb-3 block text-lg font-bold text-primary md:text-2xl"
        >
          {title}
        </Link>
        <Link
          href={`/products/${id}`}
          className="relative h-[25rem] w-[25rem] cursor-pointer overflow-hidden rounded-md md:hidden"
        >
          <Image
            src={image}
            alt={title}
            width={390}
            height={390}
            loading="lazy"
            className="rounded-md object-cover"
          />
        </Link>
        <p className="mt-4 text-justify text-sm leading-6 text-gray-800 md:m-0 md:text-base md:leading-7">
          {description}{" "}
          <Link
            href={`/products/${id}`}
            className="cursor-pointer border-b-2 border-primary-footer p-0.5 text-sm font-semibold text-primary-footer"
          >
            See more.
          </Link>
        </p>
      </div>
      <Link
        href={`/products/${id}`}
        className="relative hidden h-[20rem] w-[18rem] cursor-pointer overflow-hidden rounded-md md:block"
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          loading="lazy"
          className="overflow-hidden rounded-md object-cover"
        />
      </Link>
    </div>
  );
}

export default ProductCard;
