import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./course-files-list.module.scss";

interface CourseFilesListProps {
  colDefs: {
    headerName: string;
    field: string;
    className?: string;
    cellRenderer?: (...args: any[]) => any;
  }[];
  rowData: any[];
}

const CourseFilesList = ({ colDefs, rowData }: CourseFilesListProps) => {
  return (
    <div className="mt-16px">
      <table className={combineCSSClasses("table", styles["kTable"])}>
        <thead>
          <tr>
            {colDefs.map((col, index) => (
              <th key={`column-header-${index}`} scope="col">
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

export default CourseFilesList;
