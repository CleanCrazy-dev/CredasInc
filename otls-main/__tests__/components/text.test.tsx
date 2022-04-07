/* eslint-disable react/no-children-prop */
import Text from "@/components/Text";
import { render, screen } from "@testing-library/react";

describe("Heading", () => {
  it("should render heading with children", () => {
    render(
      <Text
        isCapitalized={false}
        children={<span data-testid="text-child">hello world</span>}
      />
    );
    expect(screen.getByTestId("text")).toBeInTheDocument();
    expect(screen.getByTestId("text-child")).toBeInTheDocument();
  });

  it("should has custom class", () => {
    render(
      <Text
        isCapitalized={false}
        customClass="headingClass"
        children={<span data-testid="text-child">hello world</span>}
      />
    );
    const heading = screen.getByTestId("text");
    expect(heading.classList.contains("headingClass")).toBe(true);
  });

  it("should has capitlized text", () => {
    render(
      <Text
        isCapitalized={true}
        customClass="headingClass"
        children={<span data-testid="text-child">hello world</span>}
      />
    );
    const heading = screen.getByTestId("text");
    expect(heading.classList.contains("text-capitalize")).toBe(true);
  });
});
