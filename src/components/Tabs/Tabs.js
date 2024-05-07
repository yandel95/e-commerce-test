import React, { useState } from "react";
import TabsContainer from "./TabsContainer";
import TabsItems from "./TabsItems";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { name: "HOME" },
    { name: "ITEM 1" },
    { name: "ITEM 2" },
    { name: "ITEM 3" },
    { name: "ITEM 4" },
  ];

  return (
    <TabsContainer>
      {tabs.map((tab, index) => (
        <TabsItems
          key={index}
          name={tab.name}
          isActive={activeTab === index}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </TabsContainer>
  );
};

export default Tabs;
