import Create from "@/pages/sessions/create";
import React from "react";
import { render, screen } from "@testing-library/react";
describe("Create Sessions", () => {
  it("should render heading", () => {
    render(<Create />);
    expect(screen.getByTestId("add_form_sessions")).toBeInTheDocument();
  });
});
