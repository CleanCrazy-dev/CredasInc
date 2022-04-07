import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { i18n } from "@lingui/core";
import styles from "./admin-courses-list.module.scss";

interface AdminCoursesListProps {
  colDefs: {
    headerName: string;
    field: string;
    className?: string;
    cellRenderer?: (...args: any[]) => any;
  }[];
  rowData: any[];
  noFilter?: boolean;
}

const AdminCoursesList = ({
  colDefs,
  rowData,
  noFilter,
}: AdminCoursesListProps) => {
  return (
    <>
      {noFilter ? (
        <></>
      ) : (
        <div
          className={combineCSSClasses("row", styles["my-16px"])}
          data-testid="filter-table"
        >
          <div className="col-3">
            {i18n._(/*i18n*/ "Sort by")}
            <div
              className={combineCSSClasses(
                styles.kDropDownList,
                styles["mt-8px"]
              )}
            >
              <select className="k-dropdown" defaultValue={colDefs[0].field}>
                {colDefs.map((col, index) => (
                  <option key={`column-sort-option-${index}`} value={col.field}>
                    {col.headerName}
                  </option>
                ))}
              </select>
              <button>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-3">
            {i18n._(/*i18n*/ "Date added")}
            <div
              className={combineCSSClasses(
                styles.kDropDownList,
                styles["mt-8px"]
              )}
            >
              <select className="k-dropdown" defaultValue="all">
                <option value="all">{i18n._(/*i18n*/ "All")}</option>
                <option value="12-02-2022">12-02-2022</option>
              </select>
              <button>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-3">
            {i18n._(/*i18n*/ "Type")}
            <div
              className={combineCSSClasses(
                styles.kDropDownList,
                styles["mt-8px"]
              )}
            >
              <select className="k-dropdown" defaultValue="all">
                <option value="all">{i18n._(/*i18n*/ "All")}</option>
                <option value="school">{i18n._(/*i18n*/ "School")}</option>
              </select>
              <button>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
                </svg>
              </button>
            </div>
          </div>
          <div className="col-3">
            {i18n._(/*i18n*/ "Tags")}
            <div
              className={combineCSSClasses(
                styles.kDropDownList,
                styles["mt-8px"]
              )}
            >
              <select className="k-dropdown" defaultValue="all">
                <option value="all">{i18n._(/*i18n*/ "All")}</option>
                <option value="Session">{i18n._(/*i18n*/ "Session")}</option>
              </select>
              <button>
                <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6L0 0H8L4 6Z" fill="#495057" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`${noFilter ? "mt-16px" : ""}`} data-testid="data-table">
        <table className={combineCSSClasses("table", styles["kTable"])}>
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
                          row,
                        })
                      : row[col.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminCoursesList;
