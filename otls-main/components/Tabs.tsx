import React, { useState } from "react";
import classNames from "classnames";
import { i18n } from "@lingui/core";
import Text from "@/components/Text";

export type TabType = {
  id: string | number;
  title: string;
  component: React.ReactElement;
};

interface TabProps {
  tabs: TabType[];
}
const Tabs = (props: TabProps) => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        gap: "2rem",
      }}
    >
      <div>
        <ul
          className="nav nav-tabs d-flex"
          style={{
            gap: "3rem",
          }}
          data-testid="tabs"
        >
          {tabs.map((tab: TabType) => (
            <li
              className={classNames(
                "text-uppercase base-text p-3 nav-tab",
                tab.id === activeTab.id && "active-tab"
              )}
              style={{
                cursor: "pointer",
              }}
              key={tab.id}
              onClick={() => handleTabChange(tab)}
              data-testid={`tab-${tab.id}`}
            >
              <Text
                variant="subTitle"
                isCapitalized={false}
                customClass="text-uppercase"
              >
                <span>{i18n._(/*i18n*/ tab.title)}</span>
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-grow-1">{activeTab.component}</div>
    </div>
  );
};

export default Tabs;
