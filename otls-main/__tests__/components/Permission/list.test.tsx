/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/no-children-prop */
import PermissionList from "@/components/permission-list";
import { render, screen } from "@testing-library/react";

const colDefData = [
  {
    headerName: "ID",
    field: "id",
  },
];

describe("Permission List", () => {
  it("should render permission list", () => {
    render(<PermissionList colDefs={colDefData} rowData={[]} />);
    expect(screen.getByTestId("permission-table")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
  });
});
