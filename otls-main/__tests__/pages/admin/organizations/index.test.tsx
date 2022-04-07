/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, Matcher } from "@testing-library/react";
import OrganizationPage from "@/pages/admin/organizations";

const colDefs = [
  {
    headerName: "Date added",
  },
  {
    headerName: "Organization",
  },
  {
    headerName: "Type",
  },
  {
    headerName: "Main Contact",
  },
  {
    headerName: "Location",
  },
  {
    headerName: "Members",
  },
  {
    headerName: "Renewal Date",
  },
  {
    headerName: "Created by",
  },
];
describe("Organization", () => {
  beforeEach(() => {
    render(<OrganizationPage />);
  });

  it("should render heading", () => {
    const textToRender = "Organizations";
    const text = screen.getByTestId("organization");
    expect(text).toBeInTheDocument();
  });

  it("should render search box", () => {
    expect(screen.getByTestId("search-organization")).toBeInTheDocument();
  });

  it("should render table", () => {
    expect(screen.getByTestId("organization-list")).toBeInTheDocument();
  });

  it("should open modal", () => {
    const button = screen.getByTestId("add-organization");
    expect(button).toBeInTheDocument();
    button.click();
    expect(screen.getByTestId("organization-modal")).toBeInTheDocument();
  });

  // table
  it("should render organiation table column headers", () => {
    colDefs.map((item: { headerName: Matcher }) => {
      expect(screen.getByTestId(item.headerName)).toBeInTheDocument();
    });
  });
});
