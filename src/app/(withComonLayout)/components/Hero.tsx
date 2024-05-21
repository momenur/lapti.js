import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

type THeroProps = {
  title: string;
  description: string;
};

const Hero = ({ title, description }: THeroProps) => {
  return (
    <div
      className="hero min-h-[500px] max-h-[600px] max-w-full"
      style={{
        backgroundImage: "url(https://i.ibb.co/rZQNP7b/asus1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-xl md:text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-white py-4 ">{description}</p>
          <Link
            href="/products"
            className="btn bg-sky-500 text-white border-sky-500"
          >
            All Products <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
