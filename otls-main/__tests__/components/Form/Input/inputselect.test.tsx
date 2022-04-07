/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/no-children-prop */
import { InputSelect } from "@/components/Input/InputSelect";
import { render, screen } from "@testing-library/react";

const options = [
  {
    title: "Option 1",
  },
  {
    title: "Option 2",
  },
];
describe("Input Field", () => {
  it("should render input container & select input", () => {
    render(<InputSelect options={[]} />);
    const inputField = screen.getByTestId("input-container");
    expect(inputField).toBeInTheDocument();
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });

  it("should correctly option", () => {
    render(<InputSelect options={options} />);
    expect(screen.getAllByRole("option").length).toBe(2);
  });
});
