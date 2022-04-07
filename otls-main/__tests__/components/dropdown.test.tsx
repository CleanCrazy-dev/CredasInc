/* eslint-disable testing-library/no-render-in-setup */
import Dropdown, { DropdownOptions } from "@/components/Dropdown/Dropdown";
import { getByTestId, render, screen } from "@testing-library/react";

const ddList: DropdownOptions[] = [
  {
    label: "google",
    url: "https://google.com",
    type: "externalLink",
  },
];

describe("DropdownList", () => {
  it("should display image", () => {
    render(<Dropdown buttonLabel="Dropdown Test" dropdownOptions={[]} />);
    expect(screen.getByText("Dropdown Test")).toBeInTheDocument();
  });

  it("should show dropdown list on click", () => {
    render(<Dropdown buttonLabel="Dropdown Test" dropdownOptions={ddList} />);
    const dropdownButton = screen.getByText("Dropdown Test");
    dropdownButton.click();
    expect(screen.getByTestId("dropdown-list")).toBeInTheDocument();
  });

  it("should have custom classnames", () => {
    render(
      <Dropdown
        buttonLabel="Dropdown Test"
        dropdownOptions={ddList}
        buttonClassName="buttonClassName"
        dropdownAlignment="end"
      />
    );
    const button = screen.getByTestId("dropdown-button");
    expect(button.classList.contains("buttonClassName")).toBe(true);

    const dropdownList = screen.getByTestId("dropdown-list");
    expect(dropdownList.classList.contains("dropdown-menu-end")).toBe(true);
  });
});
