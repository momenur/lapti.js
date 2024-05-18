import Banner from "./components/HomePageComponents/Banner";
import FlashSaleHome from "./components/HomePageComponents/FlashSaleHome";
import PopularProducts from "./components/HomePageComponents/PopularProducts";
import TopBrands from "./components/HomePageComponents/TopBrands";

const page = () => {
  return (
    <div className="">
      <Banner />
      <FlashSaleHome />
      <TopBrands />
      <PopularProducts />
    </div>
  );
};

export default page;
