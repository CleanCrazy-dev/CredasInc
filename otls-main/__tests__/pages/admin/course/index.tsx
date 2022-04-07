/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, Matcher } from "@testing-library/react";
import CoursesPage from "@/pages/admin/courses";

describe("Course", () => {
  beforeEach(() => {
    render(<CoursesPage />);
  });

  it("should render heading", () => {
    const text = screen.getByTestId("course");
    expect(text).toBeInTheDocument();
  });

  it("should render add organization modal", () => {
    const text = screen.getByTestId("add-organization-btn");
    expect(text).toBeInTheDocument();
  });
});
