import { FaArrowRight } from "react-icons/fa6";
import Card from "../Card";
import Title from "../Title";
import { TProduct } from "@/lib/products";
import Link from "next/link";

const FlashSaleHome = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops", {
    next: {
      revalidate: 30,
    },
  });
  const laptops: TProduct[] = await res.json();
  const flashSale: TProduct[] = laptops.filter(
    (item) => item.category === "flash sale"
  );
  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <Title
          title="flash sale"
          subTitle="Unbeatable Laptop Deals! Limited Time Only – Save Big on Top Brands and Models. Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
          position={true}
        />

        <Link
          href="/flash-sale"
          className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all"
        >
          View All <FaArrowRight />
        </Link>
      </div>

      <div className=" mb-10 grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center">
        {flashSale.slice(0, 4).map((item) => (
          <Card key={item._id} laptop={item} background={false} />
        ))}
      </div>
    </div>
  );
};

export default FlashSaleHome;
