import React from "react";

const Tabs = ({ children }) => {
  return (
    <div className="text-sm lg:flex-grow flex lg:justify-center">
      {children}
    </div>
  );
};

export default Tabs;
