import Card from "../../components/Card";
import Title from "../../components/Title";

const ProductsCollection = () => {
  return (
    <div className="pt-10 w-full ms-60 -z-10 ">
      <Title
        title="Our Collection Of Productsrrrr"
        subTitle="Experience lightning-fast performance with our sleek, lightweight laptop—ideal for work, gaming, and everything in between."
        position={true}
      />
      <div className="grid grid-cols-3 justify-items-center -z-30 gap-6 w-full bg-gray-50 py-8 rounded-md mt-8">
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
        <Card background={true} />
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

export default ProductsCollection;
