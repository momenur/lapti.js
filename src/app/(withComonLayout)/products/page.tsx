import React from "react";
import Sidebar from "./ProductsComponents/Sidebar";
import ProductsCollection from "./ProductsComponents/ProductsCollection";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <ProductsCollection />
    </div>
  );
};

export default page;
