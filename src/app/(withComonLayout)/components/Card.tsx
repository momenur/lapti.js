import Image from "next/image";
import cardImg from "@/assets/laptop2.jpg";
import { FaArrowRight } from "react-icons/fa";

type TCardProps = {
  background: boolean;
};

const Card = ({ background }: TCardProps) => {
  return (
    <div>
      <div
        className={`relative max-w-[350px] text-sky-500 rounded-md ${
          background ? "bg-gray-100" : "bg-gray-700"
        }`}
      >
        <Image
          className="rounded-t-md"
          src={cardImg}
          width={350}
          height={0}
          alt="next image"
        />
        <p
          className={`absolute top-2 left-2 text-xs  font-light  px-4 py-1 rounded-full ${
            background ? "bg-gray-100" : "bg-gray-700"
          }`}
        >
          -30%
        </p>
        <div className="px-4">
          <h1 className="text-xl text-sky-500 text-opacity-70 pt-4">
            Double Bed & Side Tables
          </h1>
          <div className="flex justify-between  items-center pt-1 pb-4">
            <div className="flex gap-2">
              <p className="line-through">Price</p>
              <p>Price</p>
            </div>
            <button className=" rounded-full px-2 py-1 bg-gray-700 text-white">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
