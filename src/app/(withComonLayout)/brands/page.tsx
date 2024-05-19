import acer from "@/assets/brands/acer.png";
import apple from "@/assets/brands/apple.png";
import asus from "@/assets/brands/asus.png";
import hp from "@/assets/brands/hp.png";
import lenovo from "@/assets/brands/lenovo.png";
import samsung from "@/assets/brands/samsung.png";
import Image from "next/image";
import Title from "../components/Title";

const page = () => {
  const brandsArr = [
    {
      img: acer,
      name: "acer",
    },
    {
      img: apple,
      name: "apple",
    },
    {
      img: asus,
      name: "asus",
    },
    {
      img: hp,
      name: "hp",
    },
    {
      img: lenovo,
      name: "lenovo",
    },
    {
      img: samsung,
      name: "samsung",
    },
  ];
  return (
    <div className="py-20">
      <Title
        position={false}
        title="Our Brands "
        subTitle="Performance, and Innovation from Leading Brands. Upgrade Your Gear with the Latest Models from Trusted Names in the Industry!"
      />
      <div className="grid grid-cols-3 gap-10 bg-slate-200 rounded-md justify-items-center py-32">
        {brandsArr.map((brand) => (
          <div
            key={brand.name}
            className="bg-white p-6 rounded-lg shadow-xl shadow-sky-500"
          >
            {<Image src={brand.img} width={250} height={0} alt="brand img" />}
            <h1 className="text-2xl font-semibold text-opacity-80 text-sky-500 text-center pt-5 ">
              {brand.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
