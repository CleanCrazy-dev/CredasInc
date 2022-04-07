/* eslint-disable react/no-children-prop */
import Heading from "@/components/Heading";
import { render, screen } from "@testing-library/react";

describe("Heading", () => {
  it("should render heading with children", () => {
    render(
      <Heading
        variant="title"
        children={<span data-testid="heading-child">hello world</span>}
      />
    );
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("heading-child")).toBeInTheDocument();
  });

  it("should has custom class", () => {
    render(
      <Heading
        variant="title"
        customClass="headingClass"
        children={<span data-testid="heading-child">hello world</span>}
      />
    );
    const heading = screen.getByTestId("heading");
    expect(heading.classList.contains("headingClass")).toBe(true);
  });
});
