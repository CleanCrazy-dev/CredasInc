import React from "react";
import { render, screen } from "@testing-library/react";
import Custom404 from "../../pages/404";

describe("404 Page", () => {
  it("should render 404 not found", () => {
    const textToRender = "404 - Page Not Found";
    render(<Custom404 />);
    const text = screen.getByText(textToRender);
    expect(text).toBeInTheDocument();
  });
});
