import { allCategories, priceList } from "@/lib/category";
import Link from "next/link";

const Sidebar = () => {
  const categories = allCategories;
  const prices = priceList;
  return (
    <div className="flex max-w-[100px] lg:max-w-[350px]  flex-col gap-6 bg-sky-500 text-white max-h-screen top-20 fixed px-4 pb-8 rounded-lg shadow-md ">
      <div>
        <div>
          <h1 className="text-xl font-semibold pt-8 pb-4">All Brands</h1>
        </div>
        <div className="flex flex-col gap-2">
          {prices.map((price) => (
            <button
              className="border text-white py-2 rounded-md hover:bg-gray-700 transition-all"
              key={price.id}
            >
              <Link
                href={`/laptops?minPrice=${price.minPrice}&maxPrice=${price.maxPrice}`}
              >
                <span>
                  {price.minPrice} - {price.maxPrice}
                </span>
              </Link>
            </button>
          ))}
        </div>
        <div>
          <h1 className="text-xl font-semibold pt-8 pb-4">All Brands</h1>
        </div>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <button
              className="border text-white py-2 rounded-md hover:bg-gray-700 transition-all"
              key={category.id}
            >
              <Link
                href={`/laptops?brand=${category.title.toLocaleLowerCase()}`}
              >
                {category.title}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
