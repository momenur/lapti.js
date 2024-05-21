import Image from "next/image";
import Title from "../components/Title";
import Link from "next/link";
import { TProduct } from "@/lib/products";

type Product = {
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

type BrandImage = {
  name: string;
  image: string;
};

const brandPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops");
  const productsData: TProduct[] = await res.json();

  function getUniqueBrandImages(products: Product[]): BrandImage[] {
    const brandMap: { [key: string]: string } = {};

    products?.forEach((product) => {
      if (!brandMap[product.brandName]) {
        brandMap[product.brandName] = product.brandImage;
      }
    });

    return Object.keys(brandMap).map((brandName) => ({
      name: brandName,
      image: brandMap[brandName],
    }));
  }

  const uniqueBrandImages = getUniqueBrandImages(productsData);

  return (
    <div className="py-20">
      <Title
        position={false}
        title="Our Brands "
        subTitle="Performance, and Innovation from Leading Brands. Upgrade Your Gear with the Latest Models from Trusted Names in the Industry!"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 bg-slate-200 rounded-md justify-items-center md:py-20 py-10 lg:py-32">
        {uniqueBrandImages.map((brand) => (
          <Link key={Math.random()} href={`products?brands=${brand.name}`}>
            <div
              key={brand.name}
              className="bg-white p-6 rounded-lg shadow-xl shadow-sky-300"
            >
              {
                <Image
                  src={brand.image}
                  width={250}
                  height={0}
                  alt="brand img"
                />
              }
              <h1 className="text-2xl font-semibold text-opacity-80 text-sky-500 text-center pt-5 ">
                {brand.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default brandPage;
