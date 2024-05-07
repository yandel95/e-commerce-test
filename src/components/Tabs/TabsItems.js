import React from "react";

const TabsItems = ({ name, isActive, onClick }) => {
  const onClickTab = () => {
    onClick();
  };
  return (
    <p
      className={
        isActive
          ? "bg-tabs-nav-active block mt-4 lg:inline-block border-b-4 lg:mt-0 px-3 py-2"
          : "bg-tabs-nav block mt-4 lg:inline-block lg:mt-0 px-3 py-2"
      }
      style={{ cursor: "pointer" }}
      onClick={onClickTab}
    >
      {name}
    </p>
  );
};

export default TabsItems;
