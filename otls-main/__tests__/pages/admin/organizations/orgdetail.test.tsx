/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import OrganizationDetailsPage from "@/pages/admin/organizations/details/[slug]";

describe("New Organization", () => {
  beforeEach(() => {
    render(<OrganizationDetailsPage statusCode={200} translation={{}} />);
  });

  it("should render heading", () => {
    const text = screen.getByTestId("organization-detail");
    expect(text).toBeInTheDocument();
  });
});
