import Image from "next/image";
import cardImg from "@/assets/laptop2.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

type TProduct = {
  _id: string;
  productName: string;
  brandName: string;
  productImage: string;
  brandImage: string;
  regularPrice: string;
  discountPrice: string;
  category: string;
  discountPercentage: string;
  productDescription: string;
  rating: string;
  specification: string;
};

type TCardProps = {
  background: boolean;
  laptop: TProduct;
};

const Card = ({ background, laptop }: TCardProps) => {
  return (
    <div>
      <div
        className={`relative max-w-[350px] text-sky-500 rounded-md ${
          background
            ? "bg-gray-100"
            : "bg-white border-sky-500 border shadow-sky-500 shadow-lg"
        }`}
      >
        <Image
          className="rounded-t-md"
          src={laptop.productImage}
          width={350}
          height={0}
          alt="next image"
        />
        <p
          className={`absolute top-2 text-black font-semibold left-2 text-xs    px-4 py-1 rounded-full ${
            background ? "bg-gray-100" : "bg-white"
          }`}
        >
          -{laptop.discountPercentage}%
        </p>
        <div className="px-4">
          <h1 className="text-xl text-black text-opacity-70 pt-4">
            {laptop.productName}
          </h1>
          <h1>
            <span className="pe-1">Category: </span>
            <span className="text-black font-semibold">{laptop.category}</span>
          </h1>
          <div className="flex justify-between  items-center pt-1 pb-4">
            <div className="flex gap-2">
              <p className="line-through">${laptop.regularPrice}</p>
              <p>${laptop.discountPrice}</p>
            </div>

            <Link href={`products/${laptop._id}`}>
              <span className="text-xl">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
