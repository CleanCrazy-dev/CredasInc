/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/no-children-prop */
import { InputChips } from "@/components/Input";
import { render, screen } from "@testing-library/react";

describe("Input Chips", () => {
  it("should render ", () => {
    render(<InputChips />);
    const inputChips = screen.getByTestId("input-chips");
    expect(inputChips).toBeInTheDocument();
    expect(inputChips).toHaveAttribute("type", "text");
  });

  it("should have placeholder as defined ", () => {
    render(<InputChips placeholder="test input chips" />);
    const inputChips = screen.getByTestId("input-chips");
    expect(inputChips).toHaveAttribute("placeholder", "test input chips");
  });
});
