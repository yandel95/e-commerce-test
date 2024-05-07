import React, { useState } from "react";
import "./assets/styles/globals.css";
import Navbar from "./components/Navbar";
import MiniBanner from "./components/MiniBanner";
import Hero from "./components/Hero/Hero";
import ProductList from "./components/Cards/ProductList";

const MainLayout = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <MiniBanner />

      <Navbar
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <Hero />

      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    </div>
  );
};

export default MainLayout;
