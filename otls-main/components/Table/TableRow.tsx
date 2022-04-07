import { ReactNode, ReactText } from "react";

export interface TableColumnTitle {
  title: ReactText | ReactNode;
  columnKey: string;
  isSortable?: boolean;
  CustomCell?: any;
  width?: string;
}

export interface TableRowData {
  rowKey: string;
  [columnKey: string]: React.ReactNode;
}

export interface TableRowProps {
  columnTitles: TableColumnTitle[];
  rowData: TableRowData;
  trClassName?: string;
  tdClassName?: string;
}

export const TableRow = ({
  columnTitles,
  rowData,
  trClassName = "",
  tdClassName = "",
}: TableRowProps) => {
  return (
    <tr className={trClassName}>
      {columnTitles.map(({ columnKey, CustomCell, width }) => (
        <td
          key={columnKey}
          style={{
            width: width ? width : "auto",
          }}
          className={tdClassName}
          data-testid="table-row-cell"
        >
          {CustomCell ? <CustomCell row={rowData} /> : rowData[columnKey]}
        </td>
      ))}
    </tr>
  );
};
