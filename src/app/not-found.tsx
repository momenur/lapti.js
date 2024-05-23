import notFoundImage from "@/assets/error.webp";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-200">
      <Image
        src={notFoundImage}
        width={300}
        height={300}
        alt="not found page"
      />
    </div>
  );
};

export default NotFoundPage;
