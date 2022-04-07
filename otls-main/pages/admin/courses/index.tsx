import { SearchBar, SearchBarOption, SearchBarProps } from "@credasinc/ctip-ui";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { GetStaticProps, NextPage } from "next";
import { SEOProps } from "../../../constants";
import { i18n, Messages } from "@lingui/core";
import AdminLayout from "../../../components/admin-layout";
import styles from "./courses.module.scss";
import AdminCoursesList from "@/components/admin-course-list";
import TagsInput from "@/components/TagsInput";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";

interface CoursesProps extends SEOProps {
  statusCode: number;
  translation: Messages;
}

const TreeRenderer = ({ value, params }: any) => {
  return (
    <div className={combineCSSClasses(styles[`level-${params?.level || 0}`])}>
      {value}
    </div>
  );
};

const CoursesPage: NextPage<any> = (props) => {
  const searchBarCallback: SearchBarProps["submitCallback"] = ({
    term,
    clickables,
  }) => {
    const params = new URLSearchParams();
    if (term) {
      params.append("q", term);
    }
    clickables.map((entry: SearchBarOption) => {
      if (entry.on) {
        params.append(entry.name, entry.value);
      }
    });
  };
  const colDefs = [
    {
      headerName: i18n._(/*i18n*/ "Course Name"),
      field: "name",
      cellRenderer: ({ value, row }: any) => (
        <Link
          href={`/admin/courses/details/${row?.id}`}
          key={`go-to-organizations-details-${row?.id}`}
          passHref={true}
        >
          <a className={styles["link-to-details"]}>{value}</a>
        </Link>
      ),
    },
    {
      headerName: i18n._(/*i18n*/ "Date added"),
      field: "date_added",
    },
    {
      headerName: i18n._(/*i18n*/ "Type"),
      field: "type",
    },
    {
      headerName: i18n._(/*i18n*/ "Tags"),
      field: "tags",
      cellRenderer: ({ value }: any) => {
        return (
          <TagsInput
            defaultTags={value}
            className={styles["tags-input"]}
            readonly={true}
            addBtn={true}
          />
        );
      },
    },
    {
      headerName: i18n._(/*i18n*/ "User completed"),
      field: "user_completed",
      className: "text-right",
    },
    {
      headerName: i18n._(/*i18n*/ "Sessions Organizer"),
      field: "sessions_organizer",
    },
  ];
  const bundlesColDefs = colDefs.filter((e) => e.field != "sessions_organizer");
  bundlesColDefs[0] = {
    headerName: i18n._(/*i18n*/ "Course Name"),
    field: "name",
    cellRenderer: TreeRenderer,
  };

  const dumbData = new Array(10).fill("").map((_, i) => {
    return {
      name: "About VTRA",
      date_added: "1/12/2022",
      type: "Session",
      tags: ["mental health", "therapy"],
      user_completed: 134,
      sessions_organizer: "Trained Trainer",
      level: i % 6 != 0 ? 1 : 0,
      id: i,
    };
  });

  return (
    <AdminLayout>
      <div className="container">
        <div className="d-flex justify-content-between mt-16px mb-16px">
          <p className="page__title" data-testid="course">
            {i18n._(/*i18n*/ "Courses")}
          </p>
          <button
            className="btn btn-primary my-8px"
            data-toggle="modal"
            data-target="#organization-modal"
            data-testid="add-organization-btn"
          >
            <span className="mr-8px">{i18n._(/*i18n*/ "New Course")}</span>
            <svg
              className={styles.icon}
              width="15"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93934 0.939346L4.99997 4.87872L1.06056 0.939346L0 2L4.99997 7L10 2L8.93934 0.939346Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
        <SearchBar
          changeCallback={searchBarCallback}
          submitCallback={searchBarCallback}
          initialTerm={props.searchTerm}
          clickables={props.searchClickables}
          preventFormSubmit={true}
          labels={{
            placeholder: i18n._(/*i18n*/ "Search courses"),
            clearSelection: i18n._(/*i18n*/ "Clear selection"),
            clickables: i18n._(/*i18n*/ "Popular tags"),
          }}
        />
      </div>
      <div className="container">
        <AdminCoursesList colDefs={colDefs} rowData={dumbData} />
        <p className={combineCSSClasses("mt-24px", styles.subtitle)}>Bundles</p>
        <AdminCoursesList
          colDefs={bundlesColDefs}
          rowData={dumbData}
          noFilter={true}
        />
      </div>
    </AdminLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: CoursesProps }> => {
  let statusCode = 200;
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      statusCode,
      seo_title: i18n._(/*i18n*/ "Coursess"),
      seo_description: "",
      translation,
    },
  };
};

export default CoursesPage;
