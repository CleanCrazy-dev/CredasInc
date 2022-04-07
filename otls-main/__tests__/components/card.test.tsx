import Card from "@/components/Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("should render card with body", () => {
    render(<Card body={<p data-testid="card-body">Hello world</p>} />);
    expect(screen.getByTestId("card")).toBeInTheDocument();
    expect(screen.getByTestId("card-body")).toBeInTheDocument();
  });
});
