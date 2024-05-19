type TTitleProps = {
  title: string;
  subTitle: string;
  position?: boolean;
};

const Title = ({ title, subTitle, position }: TTitleProps) => {
  return (
    <div
      className={`flex flex-col gap-2 pb-14  ${
        position === undefined
          ? "items-center"
          : position
          ? "items-start"
          : "items-end"
      }`}
    >
      <div className="max-w-[60ch]">
        <h1
          className={`text-black font-semibold text-opacity-80 text-3xl border-sky-500 border-b-2 hover:text-sky-500 transition-all pb-2 capitalize ${
            position === undefined ? "text-center" : ""
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-gray-500 text-opacity-80 font-light  ${
            position === undefined ? "text-center" : "text-justify"
          }`}
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default Title;
