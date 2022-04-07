import { render } from "@testing-library/react";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";

const COLUMN_TITLES: TableColumnTitle[] = [
  { columnKey: "column1", title: "Column 1" },
  { columnKey: "column2", title: "Column 2" },
];

const ROW_DATA: TableRowData[] = [
  { rowKey: "1", column1: "Row 1 Column 1", column2: "Row 1 Column 2" },
  { rowKey: "2", column1: "Row 2 Column 1", column2: "Row 2 Column 2" },
];

describe("Table", () => {
  it("renders element with no content given empty columnTitles", () => {
    const { baseElement } = render(
      <Table columnTitles={[]} tableData={ROW_DATA} />
    );

    expect(baseElement).toBeInTheDocument();
    expect(baseElement.textContent).toEqual("");
  });

  it("renders columns and rows specified in columnTitles", () => {
    const { getByText } = render(
      <Table columnTitles={COLUMN_TITLES} tableData={ROW_DATA} />
    );

    expect(getByText("Column 1")).toBeInTheDocument();
    expect(getByText("Column 2")).toBeInTheDocument();

    expect(getByText("Row 1 Column 1")).toBeInTheDocument();
    expect(getByText("Row 1 Column 2")).toBeInTheDocument();

    expect(getByText("Row 2 Column 1")).toBeInTheDocument();
    expect(getByText("Row 2 Column 2")).toBeInTheDocument();
  });

  it("does not render columns not specified by columnTitles", () => {
    const rowsWithAnotherColumn = ROW_DATA.map((row) => {
      const newRow = Object.assign({}, row);
      newRow.column3 = "Will Not Be Rendered";
      return newRow;
    });

    const { getByText, queryByText } = render(
      <Table columnTitles={COLUMN_TITLES} tableData={rowsWithAnotherColumn} />
    );

    expect(getByText("Column 1")).toBeInTheDocument();
    expect(getByText("Column 2")).toBeInTheDocument();

    expect(queryByText("Column 3")).not.toBeInTheDocument();
    expect(queryByText("Will Not Be Rendered")).not.toBeInTheDocument();
  });
});
