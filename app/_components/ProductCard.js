import Image from "next/image";
import Link from "next/link";

function ProductCard({ image, title, description, image_reversed = false }) {
  return (
    <div
      className={`my-0 flex w-full items-start justify-between px-small ${
        image_reversed && "flex-row-reverse"
      }`}
    >
      <div className="w-[70%] text-left">
        <Link href={"/"} className="mb-3 block text-2xl font-bold text-primary">
          {title}
        </Link>
        <p className="text-justify leading-7 text-gray-800">
          {description}{" "}
          <Link
            href={"/"}
            className="cursor-pointer border-b-2 border-primary-footer p-0.5 text-sm font-semibold text-primary-footer"
          >
            See more.
          </Link>
        </p>
      </div>
      <Link
        href={"/"}
        className="relative h-[20rem] w-[18rem] cursor-pointer overflow-hidden rounded-md"
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
