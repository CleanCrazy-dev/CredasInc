import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "../organization-list/organization-list.module.scss";

interface OrganizationMembersListProps {
  colDefs: { headerName: string; field: string; className?: string }[];
  rowData: any[];
  handleRowClicked: (row: any) => any;
}

const OrganizationMembersList = ({
  colDefs,
  rowData,
  handleRowClicked,
}: OrganizationMembersListProps) => {
  return (
    <>
      <div className="my-16px">
        <table
          className={combineCSSClasses("table", styles["kTable"])}
          data-testid="organization-member-table"
        >
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
              <tr key={`row-${i}`} onClick={handleRowClicked(row)}>
                {colDefs.map((col, j) => (
                  <td
                    key={`cell-${i}-${j}`}
                    scope="col"
                    className={combineCSSClasses(
                      col.className || "",
                      styles[col.className || ""]
                    )}
                    data-testid="org-member-tr"
                  >
                    {row[col.field]}
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

export default OrganizationMembersList;
