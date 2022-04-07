/* eslint-disable testing-library/no-render-in-setup */
import AdminNavBar from "@/components/admin-navbar";
import { render, screen } from "@testing-library/react";

describe("Admin Navbar", () => {
  it("should display ", () => {
    render(<AdminNavBar />);
    expect(screen.getByTestId("admin-nav")).toBeInTheDocument();
    expect(screen.getByTestId("tablinks")).toBeInTheDocument();
  });
});
