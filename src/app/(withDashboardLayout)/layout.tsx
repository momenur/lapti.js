import { ReactNode } from "react";
import DashboardSidebar from "./DashboardComponent/DashboardSidebar";
import DashboardNavbar from "./DashboardComponent/DashboardNavbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <DashboardNavbar />
      <DashboardSidebar />
      <div className="lg:ps-[150px] ps-[100px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
