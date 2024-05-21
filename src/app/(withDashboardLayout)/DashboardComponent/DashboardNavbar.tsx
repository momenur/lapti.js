import Image from "next/image";

const DashboardNavbar = () => {
  return (
    <nav className="flex justify-end items-center bg-gray-200 py-2 px-4">
      <div className="flex flex-col pe-4">
        <h3 className="text-lg font-semibold">Momenur Islam</h3>
        <span>Admin</span>
      </div>
      <Image
        className="rounded-full"
        src="https://i.ibb.co/WkNTvWK/27470334-7309681.jpg"
        width={60}
        height={0}
        alt="User Image"
      />
    </nav>
  );
};

export default DashboardNavbar;
