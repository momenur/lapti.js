import { TProduct } from "@/lib/products";
import Card from "../../components/Card";
import Title from "../../components/Title";
import Link from "next/link";

const ProductsCollection = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops");
  const laptops: TProduct[] = await res.json();
  return (
    <div className="pt-10 w-full ms-[105px] lg:ms-60">
      <Title
        title="Our Collection Of Products"
        subTitle="Experience lightning-fast performance with our sleek, lightweight laptop—ideal for work, gaming, and everything in between."
        position={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center -z-30 gap-6 w-full bg-gray-50 py-8 rounded-md lg:mt-8">
        {laptops.map((laptop) => (
          <Card key={laptop._id} background={true} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCollection;
