const Sidebar = () => {
  return (
    <div className="fixed top-20">
      <div className="bg-gray-200 px-4 max-w-[100px] lg:max-w-[350px] pb-16">
        <h1 className="text-xl font-semibold text-sky-500 pt-16 pb-4 truncate">
          Price Range
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">$50.00 - $100.00</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">$100.00 - $150.00</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">$150.00 - $200.00</span>
          </div>
        </div>

        <h1 className="text-xl font-semibold text-sky-500 pt-16 pb-4 truncate">
          Brands
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">Apple</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">Asus</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">Lenovo</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">HP</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">Acer</span>
          </div>
          <div className="flex gap-4 text-gray-700 font-semibold">
            <input className="" type="checkbox" name="" id="" />
            <span className="truncate">Samsung</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
