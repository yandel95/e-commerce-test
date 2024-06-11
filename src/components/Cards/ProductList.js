import React, { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../../context/ProductContext";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <label className="bg-label-text text-sm lg:flex-grow flex justify-center pb-10 pt-10">
        Featured Collection
      </label>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
