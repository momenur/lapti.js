import { TProduct } from "@/lib/products";
import Card from "../components/Card";
import Title from "../components/Title";

const page = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops");
  const laptops: TProduct[] = await res.json();
  const flashSale = laptops.filter((item) => item.category === "flash sale");
  return (
    <div className="my-10">
      <Title
        title="Flash Sale"
        subTitle="Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
        position={true}
      />

      <div className="grid grid-cols-4 gap-10">
        {flashSale.map((laptop) => (
          <Card key={laptop._id} laptop={laptop} background={true} />
        ))}
      </div>
    </div>
  );
};

export default page;
