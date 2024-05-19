import { FaArrowRight } from "react-icons/fa6";
import Card from "../Card";
import Title from "../Title";

const FlashSaleHome = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-20">
        <Title
          title="flash sale"
          subTitle="Unbeatable Laptop Deals! Limited Time Only – Save Big on Top Brands and Models. Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
          position={true}
        />

        <button className="btn rounded-full px-6 bg-sky-500 text-white hover:bg-sky-600 transition-all">
          View All <FaArrowRight />
        </button>
      </div>

      <div className=" mb-10 grid grid-cols-4 gap-4">
        <Card background={false} />
        <Card background={false} />
        <Card background={false} />
        <Card background={false} />
      </div>
    </div>
  );
};

export default FlashSaleHome;
