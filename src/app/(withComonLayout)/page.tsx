import { TProduct } from "@/lib/products";
import Banner from "./components/HomePageComponents/Banner";
import FlashSaleHome from "./components/HomePageComponents/FlashSaleHome";
import PopularProducts from "./components/HomePageComponents/PopularProducts";
import TopBrands from "./components/HomePageComponents/TopBrands";

const homePage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/laptops");
  const laptops: TProduct[] = await res.json();
  const flashSale: TProduct[] = laptops.filter(
    (item) => item.category === "flash sale"
  );
  return (
    <div className="">
      <Banner />
      <FlashSaleHome flashSale={flashSale} />
      <TopBrands />
      <PopularProducts laptops={laptops} />
    </div>
  );
};

export default homePage;
