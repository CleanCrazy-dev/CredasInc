/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/no-children-prop */
import InputContainer from "@/components/Input/InputContainer";
import { render, screen } from "@testing-library/react";

describe("Input Container", () => {
  it("should render ", () => {
    render(<InputContainer children={""} />);
    const inputChips = screen.getByTestId("input-container");
    expect(inputChips).toBeInTheDocument();
  });

  it("should render childrens ", () => {
    render(
      <InputContainer
        children={<input type="text" data-testid="test-input" />}
      />
    );
    const inputChips = screen.getByTestId("input-container");
    expect(inputChips).toBeInTheDocument();
    expect(screen.getByTestId("test-input")).toBeInTheDocument();
  });

  it("should render labels, errorMessage ", () => {
    render(
      <InputContainer
        errorMessage="test error"
        label="test label"
        children={<input type="text" data-testid="test-input" />}
      />
    );
    expect(screen.getByText("test label")).toBeInTheDocument();
    expect(screen.getByText("test error")).toBeInTheDocument();
  });

  it("should render classnames ", () => {
    render(
      <InputContainer
        errorMessage="test error"
        label="test label"
        containerClassName="test-class"
        children={<input type="text" data-testid="test-input" />}
      />
    );
    expect(screen.getByTestId("input-container")).toHaveClass("test-class");
  });
});
