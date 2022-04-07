/* eslint-disable testing-library/no-render-in-setup */
import PermissionsPage from "@/pages/admin/permissions";
import React from "react";
import { render, screen } from "@testing-library/react";

const colDefs = [
  {
    headerName: "Role",
  },
  {
    headerName: "Control",
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

describe("Course", () => {
  beforeEach(() => {
    render(<PermissionsPage />);
  });

  it("should render heading", () => {
    const text = screen.getByTestId("permission");
    expect(text).toBeInTheDocument();
  });

  it("should open permission modal", () => {
    const button = screen.getByTestId("add-permission");
    expect(button).toBeInTheDocument();
    button.click();
    expect(screen.getByTestId("permission-show-modal")).toBeInTheDocument();
  });
});
