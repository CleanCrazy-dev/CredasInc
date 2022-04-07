/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import NewOrganizationPage from "@/pages/admin/organizations/new-org";

describe("New Organization", () => {
  beforeEach(() => {
    render(<NewOrganizationPage statusCode={200} translation={{}} />);
  });

  it("should render heading", () => {
    const text = screen.getByTestId("new-organization");
    expect(text).toBeInTheDocument();
  });

  it("should render form", () => {
    const text = screen.getByTestId("new-organization-form");
    expect(text).toBeInTheDocument();
  });

  it("should render organization members", () => {
    const text = screen.getByTestId("organization-members");
    expect(text).toBeInTheDocument();
  });

  it("should open add member modal", () => {
    const button = screen.getByTestId("add-members");
    expect(button).toBeInTheDocument();
    button.click();
    expect(screen.getByTestId("add-members-modal")).toBeInTheDocument();
  });

  it("should render organization tabs", () => {
    const text = screen.getByTestId("organization-tabs");
    expect(text).toBeInTheDocument();
  });
});
