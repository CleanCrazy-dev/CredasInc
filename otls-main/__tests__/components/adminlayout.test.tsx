/* eslint-disable testing-library/no-render-in-setup */
import AdminLayout from "@/components/admin-layout";
import { render, screen } from "@testing-library/react";

const app = (
  <AdminLayout>
    <div data-testid="admin-children">
      <span>Admin layout</span>
    </div>
  </AdminLayout>
);
describe("Admin Layout", () => {
  it("should display ", () => {
    render(app);
    expect(screen.getByTestId("admin-nav")).toBeInTheDocument();
    expect(screen.getByTestId("admin-children")).toBeInTheDocument();
  });
});
