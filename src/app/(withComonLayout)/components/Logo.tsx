import Image from "next/image";
import logo from "@/assets/logo.png";

type TTitleProps = {
  height: number;
  width: number;
};

const Logo = ({ height, width }: TTitleProps) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} width={width} height={height} alt="Next image" />
      <h1 className="text-3xl font-semibold text-black">
        Lapti.<span className="text-blue-500">JS</span>
      </h1>
    </div>
  );
};

export default Logo;
