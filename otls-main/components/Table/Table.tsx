import { TableColumnTitle, TableRow, TableRowData } from "./TableRow";
import { RiArrowUpFill } from "react-icons/ri";
import { orderBy, sortBy } from "lodash";
import styles from "@/components/Table/table.module.scss";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { ReactNode, useEffect, useState } from "react";

export interface TableProps {
  columnTitles: TableColumnTitle[];
  tableData: TableRowData[];
  className?: string;
  tableTitle?: string;
  tableTitleSize?: "default" | "large";
  tableTitleClassName?: string;
  tableCTAs?: ReactNode;
  isBgTransparent?: boolean;
  isCustomTableHead?: boolean;
  theadClassName?: string;
  tbodyClassName?: string;
  tfootClassName?: string;
  trClassName?: string;
  tdClassName?: string;
  thClassName?: string;
  tableFootRows?: TableRowData[];
}

type SortType = "asc" | "desc";

export const Table = ({
  columnTitles,
  tableData,
  className = "",
  tableTitle = "",
  tableTitleClassName = "",
  tableTitleSize = "default",
  tableCTAs,
  isBgTransparent = false,
  isCustomTableHead = false,
  theadClassName = "",
  tbodyClassName = "",
  tfootClassName = "",
  trClassName = "",
  thClassName = "",
  tdClassName = "",
  tableFootRows,
}: TableProps) => {
  const [sortedList, setSortedList] = useState<TableRowData[]>([]);
  const [dataSorted, setDataSorted] = useState<SortType>("asc");

  const sortData = (key: string) => {
    setSortedList(orderBy(tableData, [key], [dataSorted]));
    setDataSorted(dataSorted === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    setSortedList(orderBy(tableData));
  }, [tableData]);

  return (
    <>
      {(tableTitle || tableCTAs) && (
        <div
          className={combineCSSClasses(
            styles.table_head,
            tableTitleSize === "large" ? styles["table_head--lg"] : ""
          )}
        >
          {tableTitle && (
            <p
              className={combineCSSClasses(
                styles.table_title,
                tableTitleSize === "large" ? styles["table_title--lg"] : "",
                tableTitleClassName ? tableTitleClassName : ""
              )}
              style={{ fontWeight: "400" }}
            >
              {tableTitle}
            </p>
          )}
          {tableCTAs && (
            <div className={styles.table_head__ctas}>{tableCTAs}</div>
          )}
        </div>
      )}
      <table
        className={combineCSSClasses(
          styles.table,
          isBgTransparent ? styles["table--transparent"] : "",
          className
        )}
      >
        <thead className={theadClassName}>
          <tr className={trClassName}>
            {columnTitles.map(
              ({ columnKey: key, title, isSortable, width }) => {
                return (
                  <th
                    key={key}
                    className={combineCSSClasses(styles.header, thClassName)}
                    scope="col"
                    style={width ? { width } : {}}
                  >
                    {isCustomTableHead ? (
                      title
                    ) : (
                      <div className="d-flex align-items-center">
                        <div>{title}</div>
                        {isSortable && (
                          <div className="icon" onClick={() => sortData(key)}>
                            <RiArrowUpFill size={20} className="icon" />
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody className={tbodyClassName}>
          {sortedList.map((rowData: TableRowData) => {
            return (
              <TableRow
                key={rowData.rowKey}
                columnTitles={columnTitles}
                rowData={rowData}
                trClassName={trClassName}
                tdClassName={tdClassName}
              />
            );
          })}
        </tbody>
        {tableFootRows?.length! > 0 && (
          <tfoot className={tfootClassName}>
            {tableFootRows?.map((rowData) => (
              <TableRow
                key={rowData.rowKey}
                columnTitles={columnTitles}
                rowData={rowData}
                trClassName={trClassName}
                tdClassName={tdClassName}
              />
            ))}
          </tfoot>
        )}
      </table>
    </>
  );
};
