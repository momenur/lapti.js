import Image from "next/image";
import logo from "@/assets/logo.png";

type TLogoProps = {
  height: number;
  width: number;
  text: string;
};

const Logo = ({ height, width, text }: TLogoProps) => {
  console.log(text);
  return (
    <div className="flex items-center gap-4">
      <Image src={logo} width={width} height={height} alt="Next image" />
      <h1 className={`text-3xl font-semibold text-black ${text}`}>
        Lapti.<span className="text-sky-500">JS</span>
      </h1>
    </div>
  );
};

export default Logo;
