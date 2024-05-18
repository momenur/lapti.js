import Title from "../Title";
import leftImage from "@/assets/brands/left.jpg";
import rightImage from "@/assets/brands/right.jpg";
import middleImage1 from "@/assets/brands/middle1.jpg";
import middleImage2 from "@/assets/brands/middle2.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const TopBrands = () => {
  return (
    <div className="mb-10 ">
      <Title
        title="Top Categories"
        subTitle=" Explore the Best in Technology! Discover Premium Quality, Performance, and Innovation from Leading Brands. Upgrade Your Gear with the Latest Models from Trusted Names in the Industry!"
      />

      <div className="flex justify-between bg-gray-100 py-10  rounded-md px-10">
        <Image alt="Brands Image" height={700} width={400} src={leftImage} />
        <div className="flex flex-col justify-between">
          <Image
            alt="Brands Image"
            height={800}
            width={550}
            src={middleImage1}
          />
          <Image
            alt="Brands Image"
            height={800}
            width={550}
            src={middleImage2}
          />
        </div>
        <Image alt="Brands Image" height={400} width={400} src={rightImage} />
      </div>
      <div className="flex justify-center pt-16">
        <button className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all">
          View All <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopBrands;
