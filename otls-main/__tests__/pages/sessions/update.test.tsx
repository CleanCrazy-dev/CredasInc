import Update from "@/pages/sessions/update";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Update Sessions", () => {
  it("should render heading", () => {
    render(<Update />);
    expect(screen.getByTestId("update_form")).toBeInTheDocument();
    expect(screen.getByTestId("session_form")).toBeInTheDocument();
  });
});
