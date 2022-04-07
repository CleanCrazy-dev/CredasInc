/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/no-children-prop */
import OrganizationMembersList from "@/components/organization-member-list";
import { render, screen } from "@testing-library/react";

const colDefData = [
  {
    headerName: "ID",
    field: "id",
  },
];

const rowData = [
  {
    id: "1",
  },
];

describe("Origanization Memebr List", () => {
  it("should admin organization list", () => {
    render(
      <OrganizationMembersList
        colDefs={colDefData}
        rowData={[]}
        handleRowClicked={function (row: any) {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(screen.getByTestId("organization-member-table")).toBeInTheDocument();
    expect(screen.getByText("ID")).toBeInTheDocument();
  });
});
