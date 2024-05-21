import { TProduct } from "@/lib/products";
import Image from "next/image";
import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops");
  const laptops: TProduct[] = await res.json();

  return (
    <div className=" w-full  mt-4">
      <div className="flex justify-between px-2 gap-2 py-8 bg-gray-400 rounded-t-lg">
        <p className="flex-1 text-xs  md:text-lg">SL</p>
        <p className="flex-1 truncate  md:text-lg text-xs">Brand</p>
        <p className="flex-1 truncate  md:text-lg text-xs">Price</p>
      </div>

      <div className=" flex flex-col gap-4 mt-4">
        {laptops.map((laptop, index) => (
          <div
            key={laptop._id}
            className="flex gap-2 justify-between items-center px-4 py-2 bg-gray-200"
          >
            <p className="flex-1 text-xs md:text-lg">{index + 1}</p>
            <div className="flex flex-1 justify-center items-center gap-4">
              <Image
                alt="Product Image"
                height={70}
                width={70}
                src={laptop.productImage}
                className="flex-1 max-w-[100px] rounded-md"
              />
              <p className="flex-1 capitalize text-xs  md:text-lg truncate">
                {laptop.brandName}
              </p>
            </div>
            <p className="flex-1 text-xs md:text-lg truncate">
              ${laptop.discountPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
