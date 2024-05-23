import { TProduct } from "@/lib/type";
import Card from "../components/Card";
import Title from "../components/Title";
import { getAllLaptops } from "@/lib/getAllLaptops";
import Countdown from "../components/ui/Countdown";

const FlashSalePage = async () => {
  const laptops: TProduct[] = await getAllLaptops();
  const flashSale = laptops.filter((item) => item.category === "flash sale");

  return (
    <div className="my-10">
      <Title
        title="Flash Sale"
        subTitle="Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
        position={true}
      />

      <div>
        <Countdown />
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center lg:grid-cols-4 gap-10">
        {flashSale.map((laptop) => (
          <Card key={laptop._id} laptop={laptop} background={true} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
