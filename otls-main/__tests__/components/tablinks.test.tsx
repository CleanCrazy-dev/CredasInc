import TabLinks, { TabLink } from "@/components/Tab-Links";
import { render, screen } from "@testing-library/react";

const tabs: TabLink[] = [
  {
    url: "/admin/dashboard",
    label: "Dashboard",
  },
];
describe("Tab Links", () => {
  it("should render tab links", () => {
    render(<TabLinks links={tabs} activeLink={""} />);
    expect(screen.getByTestId("tablinks")).toBeInTheDocument();
    tabs.map((tab) => {
      expect(screen.getByRole(`tab-${tab.label}`)).toBeInTheDocument();
      expect(screen.getByRole(`tab-${tab.label}`)).toHaveAttribute(
        "href",
        tab.url
      );
    });
  });
});
