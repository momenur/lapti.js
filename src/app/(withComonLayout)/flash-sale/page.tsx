import Card from "../components/Card";
import Title from "../components/Title";

const page = () => {
  return (
    <div className="my-10">
      <Title
        title="Flash Sale"
        subTitle="Don't Miss Out on Incredible Discounts. Shop Now and Upgrade Your Tech Today!"
        position={true}
      />

      <div className="grid grid-cols-4 gap-10">
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

export default page;
