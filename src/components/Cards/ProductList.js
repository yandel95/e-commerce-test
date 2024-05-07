import React from "react";
import Card from "./Card";
import { data } from "../data";

const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const onAddProduct = (product) => {
    let updatedTotal = total + product.price * product.quantity;
    let updatedCountProducts = countProducts + product.quantity;

    if (allProducts.find((item) => item.id === product.id)) {
      const updatedProducts = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );

      setAllProducts(updatedProducts);
    } else {
      setAllProducts([...allProducts, product]);
    }

    setTotal(parseFloat(updatedTotal.toFixed(2)));
    setCountProducts(updatedCountProducts);
  };

  return (
    <div>
      <label className="bg-label-text text-sm lg:flex-grow flex justify-center pb-10 pt-10">
        Featured Collection
      </label>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((product, index) => (
            <Card key={index} product={product} onAddProduct={onAddProduct} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
