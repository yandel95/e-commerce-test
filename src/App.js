import React from "react";
import "./assets/styles/globals.css";
import Navbar from "./components/Header/Navbar";
import MiniBanner from "./components/Header/MiniBanner";
import Hero from "./components/Hero/Hero";
import ProductList from "./components/Cards/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MiniBanner />
      <Navbar />
      <Sidebar />
      <Hero />
      <ProductList />
    </div>
  );
};

export default App;
