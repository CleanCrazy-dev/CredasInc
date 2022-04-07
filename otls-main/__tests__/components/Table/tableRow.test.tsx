import Card from "@/components/Card";
import { TableRow } from "@/components/Table";
import { render, screen } from "@testing-library/react";

describe("Table Row", () => {
  it("no row data", () => {
    render(
      <table>
        <tbody>
          <TableRow
            columnTitles={[]}
            rowData={{
              rowKey: "test",
            }}
          />
        </tbody>
      </table>
    );
    expect(screen.queryByTestId("table-row-cell")).not.toBeInTheDocument();
  });

  it("should render rows data", () => {
    render(
      <table>
        <tbody>
          <TableRow
            columnTitles={[
              {
                title: "ID",
                columnKey: "id",
              },
            ]}
            rowData={{
              rowKey: "test",
            }}
          />
        </tbody>
      </table>
    );
    expect(screen.getAllByTestId("table-row-cell").length).toBe(1);
  });
});
