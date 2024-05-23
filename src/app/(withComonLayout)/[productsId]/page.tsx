import { getBrandProducts } from "@/lib/getBrandProducts";
import { TProduct } from "@/lib/type";
import Card from "../components/Card";
import Title from "../components/Title";

type TParams = {
  brand: string;
  minPrice: string;
  maxPrice: string;
};

const AllLaptopsPage = async ({ searchParams }: { searchParams: TParams }) => {
  const laptops: TProduct[] = await getBrandProducts(
    searchParams.brand || "all-laptops",
    searchParams?.minPrice,
    searchParams?.maxPrice
  );
  return (
    <div className="lg:w-[1130px]  ms-[90px] lg:ms-40 pt-10">
      <Title
        title="Our Collection Of Products"
        subTitle="Experience lightning-fast performance with our sleek, lightweight laptop—ideal for work, gaming, and everything in between."
        position={false}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-4 pt-10">
        {laptops?.map((laptop: any) => (
          <Card key={laptop._id} background={true} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default AllLaptopsPage;
