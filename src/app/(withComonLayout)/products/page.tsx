import React from "react";
import Sidebar from "./ProductsComponents/Sidebar";
import ProductsCollection from "./ProductsComponents/ProductsCollection";

const productsPage = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <ProductsCollection />
    </div>
  );
};

export default productsPage;
