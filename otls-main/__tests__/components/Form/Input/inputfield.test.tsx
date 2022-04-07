/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable react/no-children-prop */
import { InputField } from "@/components/Input";
import { render, screen } from "@testing-library/react";

describe("Input Field", () => {
  it("should render ", () => {
    render(<InputField type={"text"} />);
    const inputField = screen.getByTestId("input-container");
    expect(inputField).toBeInTheDocument();
    expect(screen.getByTestId("input-only")).toBeInTheDocument();
    expect(screen.queryByTestId("textarea")).not.toBeInTheDocument();
  });

  it("should render textarea", () => {
    render(<InputField type={"textarea"} />);
    const inputField = screen.getByTestId("input-container");
    expect(inputField).toBeInTheDocument();
    expect(screen.queryByTestId("input-only")).not.toBeInTheDocument();
    expect(screen.queryByTestId("textarea")).toBeInTheDocument();
  });
});
