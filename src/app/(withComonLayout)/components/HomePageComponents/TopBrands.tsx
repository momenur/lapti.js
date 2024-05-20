import Title from "../Title";
import leftImage from "@/assets/brands/left.jpg";
import rightImage from "@/assets/brands/right.jpg";
import middleImage1 from "@/assets/brands/middle1.jpg";
import middleImage2 from "@/assets/brands/middle2.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const TopBrands = () => {
  return (
    <div className="mb-10 mt-32 ">
      <Title
        title="Our Top Brands"
        subTitle=" Explore the Best in Technology! Discover Premium Quality, Performance, and Innovation from Leading Brands. Upgrade Your Gear with the Latest Models from Trusted Names in the Industry!"
      />

      <div className="md:flex justify-between bg-gray-100 py-10  rounded-md px-10">
        <Image alt="Brands Image" height={0} width={380} src={leftImage} />
        <div className="flex flex-col justify-between">
          <Image
            alt="Brands Image"
            height={0}
            width={420}
            src={middleImage1}
            className="shadow-sky-500 shadow-lg"
          />
          <Image
            alt="Brands Image"
            height={0}
            width={420}
            src={middleImage2}
            className="shadow-sky-500 shadow-lg"
          />
        </div>
        <Image alt="Brands Image" height={0} width={380} src={rightImage} />
      </div>
      <div className="flex justify-center pt-16">
        <Link
          href="/brands"
          className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all"
        >
          View All <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopBrands;
