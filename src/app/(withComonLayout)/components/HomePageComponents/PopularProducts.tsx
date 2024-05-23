import { FaArrowRight } from "react-icons/fa6";
import Card from "../Card";
import Title from "../Title";
import Link from "next/link";
import { TProduct } from "@/lib/type";
import { getAllLaptops } from "@/lib/getAllLaptops";

const PopularProducts = async () => {
  const laptops: TProduct[] = await getAllLaptops();
  return (
    <div>
      <div className="flex justify-between items-center mt-32">
        <Title
          title="Most Popular Products"
          subTitle="Unbeatable Laptop Deals! Limited Time Only – Save Big on Top Brands and Models. Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
          position={true}
        />

        <Link
          href="/products"
          className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      <div className=" mb-10 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center ">
        {laptops.slice(0, 8).map((laptop) => (
          <Card background={true} key={laptop._id} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
