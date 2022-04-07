import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { i18n } from "@lingui/core";
import styles from "./permission-list.module.scss";

interface PermissionListProps {
  colDefs: {
    headerName: string;
    field: string;
    className?: string;
    cellRenderer?: (...args: any[]) => any;
  }[];
  rowData: any[];
  noFilter?: boolean;
}

const PermissionList = ({
  colDefs,
  rowData,
  noFilter,
}: PermissionListProps) => {
  return (
    <div className={`${noFilter ? "mt-16px" : ""}`}>
      <table
        className={combineCSSClasses("table", styles["kTable"])}
        data-testid="permission-table"
      >
        <thead>
          <tr>
            {colDefs.map((col, index) => (
              <th
                key={`column-header-${index}`}
                scope="col"
                data-testid={col.headerName}
              >
                {col.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData?.map((row, i) => (
            <tr key={`row-${i}`}>
              {colDefs.map((col, j) => (
                <td
                  key={`cell-${i}-${j}`}
                  scope="col"
                  className={combineCSSClasses(
                    col.className || "",
                    styles[col.className || ""]
                  )}
                >
                  {col.cellRenderer
                    ? col.cellRenderer({
                        value: row[col.field],
                        params: { level: row?.level },
                      })
                    : row[col.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionList;
