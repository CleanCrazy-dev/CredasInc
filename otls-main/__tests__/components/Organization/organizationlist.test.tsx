/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/no-children-prop */
import OrganizationsList from "@/components/organization-list";
import { render, screen } from "@testing-library/react";

const colDefData = [
  {
    headerName: "ID",
    field: "id",
  },
];

describe("Organization List", () => {
  it("should admin organization list", () => {
    render(<OrganizationsList colDefs={colDefData} rowData={[]} />);
    expect(screen.getByTestId("organization-list")).toBeInTheDocument();
  });

  it("should have organization list select", () => {
    render(<OrganizationsList colDefs={colDefData} rowData={[]} />);
    const orgSelect = screen.getByTestId("organization-select");
    expect(orgSelect).toBeInTheDocument();
  });
});
