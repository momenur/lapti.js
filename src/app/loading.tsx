import loadingImage from "@/assets/loading.gif";
import Image from "next/image";
const loading = () => {
  return (
    <div className="min-h-screen bg-black w-full flex justify-center items-center">
      <Image src={loadingImage} width={100} height={0} alt="Loading Image" />
    </div>
  );
};

export default loading;
