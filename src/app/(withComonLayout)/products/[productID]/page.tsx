import Image from "next/image";
import image from "@/assets/laptop3.jpg";
import { FaDotCircle, FaStar } from "react-icons/fa";
import Title from "../../components/Title";
import { TProduct } from "@/lib/products";

type TParams = {
  productID: string;
};

const page = async ({ params }: { params: TParams }) => {
  const url = `http://localhost:5000/api/v1/laptops/${params.productID}`;
  const res = await fetch(url);
  const laptop: TProduct = await res.json();

  return (
    <div className="mt-10 min-h-screen">
      <Title
        title="Product Details"
        subTitle="Product Highlights: Featuring Top Brands - Samsung, ASUS, Acer, HP, Lenovo, and Apple. Discover Performance, Style, and Innovation with Every Laptop"
      />
      <div className="flex gap-8 pb-8">
        <div className="flex gap-6 pb-8 max-w-full">
          <div className="flex flex-col gap-4 justify-between">
            <Image src={image} height={0} width={220} alt="Img" />
            <Image src={image} height={0} width={220} alt="Img" />
            <Image src={image} height={0} width={220} alt="Img" />
          </div>
          <div>
            <Image
              src={laptop.productImage}
              height={0}
              width={800}
              alt="Img"
              className="shadow-gray-700 shadow-xl"
            />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl font-semibold">{laptop.productName}</h1>
          <p className="flex gap-2 items-center pb-8 py-1 text-md font-semibold">
            ${laptop.discountPrice} |{" "}
            <span className="flex text-sky-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </p>

          <p className="border-t pt-2 text-justify font-light">
            <span className="block text-lg text-sky-500 font-medium">
              Specification:
            </span>
            <span className="text-gray-500  font-semibold">
              {laptop.specification}
            </span>
          </p>

          <div className="mt-10 border-t">
            <p className="flex items-center gap-2 mt-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Performance Base laptop.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Best value for Money.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Trust our Best Service.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-10 shadow-sky-200 shadow-lg">
        <h1 className="text-sky-500 font-bold text-3xl text-opacity-70 pb-8">
          Products Descriptions
        </h1>
        <p className="text-lg font-light text-gray-500 text-justify">
          {laptop.productDescription},Product Highlights: Featuring Top Brands -
          Samsung, ASUS, Acer, HP, Lenovo, and Apple. Discover Performance,
          Style, and Innovation with Every Laptop.Product Highlights: Featuring
          Top Brands - Samsung, ASUS, Acer, HP, Lenovo, and Apple. Discover
          Performance, Style,
          <br /> <br />
          and Innovation with Every Laptop.Product Highlights: Featuring Top
          Brands - Samsung, ASUS, Acer, HP, Lenovo, and Apple. Discover
          Performance, Style, and Innovation with Every Laptop. Product
          Highlights: <br />
          <br />
          Featuring Top Brands - Samsung, ASUS, Acer, HP, Lenovo, and Apple.
          Discover Performance, Style, and Innovation with Every Laptop.Product
          Highlights: Featuring Top Brands - Samsung, ASUS, Acer, HP, Lenovo,
          and Apple. Discover Performance, Style, and Innovation with Every
          Laptop.Product Highlights: Featuring Top Brands - Samsung, ASUS, Acer,
          HP, Lenovo, and Apple. Discover Performance, Style, and Innovation
          with Every Laptop.
          <br />
          <br />
          <span className="font-semibold"> Specification: </span>{" "}
          {laptop.specification}
        </p>
      </div>
    </div>
  );
};

export default page;
