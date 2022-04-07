import Tabs, { TabType } from "@/components/Tabs";
import { fireEvent, render, screen } from "@testing-library/react";

const tabs: TabType[] = [
  {
    id: "1",
    title: "Dashboard",
    component: <p data-testid="dashboard">this is dashboard</p>,
  },
  {
    id: "2",
    title: "Settings",
    component: <p data-testid="settings">this is setting</p>,
  },
];

describe("Tabs", () => {
  it("should render tabs", () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByTestId("tabs")).toBeInTheDocument();

    tabs.map((tab) => {
      const tabElement = screen.getByTestId(`tab-${tab.id}`);
      expect(tabElement).toBeInTheDocument();
      expect(tabElement).toHaveTextContent(tab.title);
    });
  });

  it("should render tabs items & show active component", () => {
    render(<Tabs tabs={tabs} />);
    tabs.map((tab) => {
      const tabElement = screen.getByTestId(`tab-${tab.id}`);
      fireEvent.click(tabElement);
      expect(tabElement).toHaveClass("active-tab");
    });
  });
});
