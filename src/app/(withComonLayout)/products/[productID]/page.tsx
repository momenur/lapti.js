import Image from "next/image";
import image from "@/assets/laptop3.jpg";
import { FaDotCircle, FaStar } from "react-icons/fa";
import Title from "../../components/Title";
const page = () => {
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
              src={image}
              height={0}
              width={800}
              alt="Img"
              className="shadow-gray-700 shadow-xl"
            />
          </div>
        </div>
        <div className="w-full">
          <h1>Double Bed & Side Tables</h1>
          <p className="flex gap-2 items-center pb-8">
            $54.00 |{" "}
            <span className="flex text-sky-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </p>

          <p className="border-t pt-2 text-justify font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quis
            sunt id quidem suscipit corrupti assumenda cum perspiciatis expedita
            eveniet recusandae sint debitis dignissimos maxime qui sit ipsam?
            Dolor temporibus perferendis, neque dolorem repellendus quae
            recusandae et inventore vitae ipsa a suscipit aut, est possimus
            perspiciatis nobis rerum quibusdam similique!
          </p>

          <div className="mt-10 border-t">
            <p className="flex items-center gap-2 mt-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
            <p className="flex items-center gap-2">
              <span className="text-xs">
                <FaDotCircle />
              </span>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-10 shadow-sky-200 shadow-lg">
        <h1 className="text-sky-500 font-bold text-3xl text-opacity-70 pb-8">
          Products Descriptions
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, a
          reiciendis! Doloremque saepe modi rem quo, facere consectetur deserunt
          commodi perspiciatis alias autem ex nobis ea ipsam neque. Sint unde
          quam debitis! Accusamus eos quis numquam porro officiis eveniet dolore
          velit illum dignissimos nesciunt, eum aliquam a omnis ad blanditiis.
          Saepe minima asperiores ipsa, possimus aliquid nihil soluta quas vel
          et tempora voluptate aliquam delectus eius odio excepturi numquam a
          dignissimos fuga quod molestiae, inventore ea facere. Esse sapiente
          voluptas minus cumque distinctio vero rerum beatae odio impedit illo
          cum eaque dolor at, ducimus deserunt delectus est dolore ut atque?
        </p>
      </div>
    </div>
  );
};

export default page;
