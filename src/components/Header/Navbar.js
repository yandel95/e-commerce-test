import React, { useState, useContext } from "react";
import Tabs from "../Tabs/Tabs";
import { SidebarContext } from "../../context/SidebarContext";
import { CartContext } from "../../context/CartContext";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [tabMobile, setTabMobile] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

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
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <BsBag className="text-2xl" />
              <div className="bg-green absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
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
