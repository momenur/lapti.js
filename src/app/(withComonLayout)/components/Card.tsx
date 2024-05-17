import Image from "next/image";
import cardImg from "@/assets/laptop2.jpg";
import { FaAd, FaPlusCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Card = () => {
  return (
    <div className=" relative max-w-[350px] bg-gray-700 text-sky-500 rounded-md">
      <Image
        className="rounded-t-md"
        src={cardImg}
        width={350}
        height={0}
        alt="next image"
      />
      <p className="absolute top-2 left-2 text-xs  font-light bg-gray-700 px-4 py-1 rounded-full">
        -30%
      </p>
      <div className="px-4">
        <h1 className="text-xl text-sky-500 text-opacity-70 pt-4">
          Double Bed & Side Tables
        </h1>
        <div className="flex justify-between pt-1 pb-4">
          <div className="flex gap-2">
            <p className="line-through">Price</p>
            <p>Price</p>
          </div>
          <span>
            <FaPlusCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
