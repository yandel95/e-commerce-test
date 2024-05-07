import React, { useState } from "react";
import Tabs from "./Tabs/Tabs";

const Navbar = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);
  const [tabMobile, setTabMobile] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    const updatedTotal = parseFloat(
      (total - product.price * product.quantity).toFixed(2)
    );
    const updatedCountProducts = countProducts - product.quantity;
    setTotal(updatedTotal);
    setCountProducts(updatedCountProducts);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <nav className="bg-nav">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={tabMobile ? "true" : "false"}
              onClick={() => setTabMobile(!tabMobile)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {tabMobile ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 lg:items-center">
                <Tabs />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="container-icon">
              <div
                className="container-cart-icon"
                onClick={() => setActive(!active)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-cart"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <div className="count-products">
                  <span id="count-products-span">{countProducts}</span>
                </div>
              </div>

              <div
                className={`container-cart-products ${
                  active ? "" : "hidden-cart"
                }`}
              >
                {allProducts.length ? (
                  <>
                    <div className="row-product">
                      {allProducts.map((product) => (
                        <div
                          className="cart-product space-x-1"
                          key={product.id}
                        >
                          <div className="info-cart-product flex whitespace-nowrap space-x-2">
                            <span className="quantity-product-cart">
                              {product.quantity}
                            </span>
                            <span className="product-title-cart overflow-hidden whitespace-nowrap">
                              {product.name.length > 12
                                ? product.name.slice(0, 12) + "..."
                                : product.name}
                            </span>
                            <span className="price-product-cart">
                              ${product.price}
                            </span>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="icon-close"
                            onClick={() => onDeleteProduct(product)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>

                    <div className="cart-total">
                      <h3>Total:</h3>
                      <span className="total-to-pay">${total}</span>
                    </div>
                    <div className="flex justify-center pb-2">
                      <button className="btn-clear-all" onClick={onCleanCart}>
                        EMPTY CART
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="cart-empty flex whitespace-nowrap">
                    THE CART IS EMPTY
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`xs:hidden sm:hidden ${tabMobile ? "" : "hidden"}`}
        id="mobile-menu"
      >
        {tabMobile && (
          <div
            className={`space-y-1 px-2 pb-3 pt-2 bg-white xs:hidden sm:hidden}`}
          >
            <p className="text-gray-300 hover:bg-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              HOME
            </p>
            <p className="text-gray-300 hover:bg-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              ITEM1
            </p>
            <p className="text-gray-300 hover:bg-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              ITEM2
            </p>
            <p className="text-gray-300 hover:bg-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              ITEM3
            </p>
            <p className="text-gray-300 hover:bg-green hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              ITEM4
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
