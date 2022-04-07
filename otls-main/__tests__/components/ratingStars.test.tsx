/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import RatingStars from "@/components/RatingStars/RatingStars";
import { render, screen } from "@testing-library/react";

describe("Rating Stars", () => {
  it("should render 1 stars", () => {
    render(<RatingStars rating={1} />);
    expect(screen.getByTestId("rating-star-container")).toBeInTheDocument();
    expect(screen.getAllByTestId("rating-star-container").length).toBe(1);
  });
});
