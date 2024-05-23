import Sidebar from "../components/ui/Sidebar";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default CategoriesLayout;
