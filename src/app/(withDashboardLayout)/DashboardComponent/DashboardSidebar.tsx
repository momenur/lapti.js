import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <div className="fixed top-0 ">
      <div className="bg-gray-200 min-h-screen px-4 max-w-[100px] lg:max-w-[350px] pb-16">
        <h1 className="text-xl font-semibold text-sky-500 pt-16 pb-4 truncate">
          Dashboard
        </h1>
        <div className="flex flex-col gap-2">
          <Link href="/dashboard/all-products" className="truncate">
            All Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
