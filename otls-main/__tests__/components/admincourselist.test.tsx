/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable react/no-children-prop */
import AdminCoursesList from "@/components/admin-course-list";
import { render, screen } from "@testing-library/react";

const colDefData = [
  {
    headerName: "ID",
    field: "id",
  },
];

describe("Upload Button", () => {
  it("should admin course list", () => {
    render(<AdminCoursesList colDefs={[]} rowData={[]} noFilter={true} />);
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
  it("should admin course list", () => {
    render(<AdminCoursesList colDefs={colDefData} rowData={[]} />);
    expect(screen.getByTestId("filter-table")).toBeInTheDocument();
    expect(screen.getByTestId("data-table")).toBeInTheDocument();
  });
});
