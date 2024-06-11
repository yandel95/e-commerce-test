import React, { createContext, useState } from "react";
import { data } from "../data";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
