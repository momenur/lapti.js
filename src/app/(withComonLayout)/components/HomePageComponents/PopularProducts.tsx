import { FaArrowRight } from "react-icons/fa6";
import Card from "../Card";
import Title from "../Title";

const PopularProducts = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title
          title="Most Popular Products"
          subTitle="Unbeatable Laptop Deals! Limited Time Only – Save Big on Top Brands and Models. Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
          position={true}
        />

        <button className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all">
          View All <FaArrowRight />
        </button>
      </div>

      <div className=" mb-10 grid grid-cols-4 gap-4 ">
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
      </div>
    </div>
  );
};

export default PopularProducts;
