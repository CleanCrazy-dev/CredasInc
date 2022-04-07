import { i18n, Messages } from "@lingui/core";
import { SEOProps } from "../../../../constants";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { loadTranslation } from "utils/translation";
import AdminLayout from "@/components/admin-layout";
import Link from "next/link";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./details.module.scss";
import { useRouter } from "next/router";
import DropdownList from "@/components/Dropdown-list";
import TagsInput from "@/components/TagsInput";
import Image from "next/image";
import Checkbox from "@/components/Checkbox";
import CourseFilesList from "@/components/CourseFilesList";
import CourseEditor from "@/components/CourseEditor";
interface CourseDetailsProps extends SEOProps {
  statusCode: number;
  translation: Messages;
  searchTerm?: any;
  searchClickables?: any;
}

const FileActionCell = ({ value, row }: any) => {
  return (
    <div className="d-flex gap-3">
      <button className="btn">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.18164 0H8.18164V4H11.1816L7.18164 9L3.18164 4H6.18164V0ZM0.181641 14V11H14.1816V14H0.181641Z"
            fill="#495057"
          />
        </svg>
      </button>
      <button className="btn">
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.1816 4H12.1816V2L10.1816 0H3.18164C2.62852 0 2.18164 0.446875 2.18164 1V4H1.18164C0.631641 4 0.181641 4.45 0.181641 5V10C0.181641 10.55 0.631641 11 1.18164 11H2.18164V11.0312V13C2.18164 13.55 2.63164 14 3.18164 14H11.1816C11.7316 14 12.1816 13.55 12.1816 13V11.0312V11H13.1816C13.7316 11 14.1816 10.55 14.1816 10V5C14.1816 4.45 13.7316 4 13.1816 4ZM3.18164 1H9.18164V3H11.1816V5H3.18164V1ZM11.1816 12.9969V9H13.1816V8H11.1816H1.18164V9H3.18164V12.9969L3.18477 13H11.1785L11.1816 12.9969ZM4.18164 9H10.1816V10H4.18164V9ZM9.18164 11H4.18164V12H9.18164V11Z"
            fill="#495057"
          />
        </svg>
      </button>
      <button className="btn">
        <svg
          width="15"
          height="8"
          viewBox="0 0 15 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.181641 4C1.56289 1.60938 4.21914 0 7.18164 0C10.1441 0 12.8004 1.60938 14.1816 4C12.8004 6.39062 10.141 8 7.18164 8C4.22227 8 1.56602 6.39062 0.181641 4ZM7.18164 3C7.18164 2.44688 6.73477 2 6.18164 2C5.62852 2 5.18164 2.44688 5.18164 3C5.18164 3.55312 5.62852 4 6.18164 4C6.73477 4 7.18164 3.55312 7.18164 3ZM1.36289 4C1.93789 3.175 2.76289 2.47813 3.63164 1.96563C4.01289 1.74063 4.41602 1.55313 4.83164 1.40625C4.12539 2.04688 3.68164 2.97187 3.68164 4C3.68164 5.02812 4.12539 5.95312 4.83164 6.59375C4.41602 6.44688 4.01289 6.25938 3.63164 6.03438C2.76289 5.52188 1.93789 4.825 1.36289 4ZM9.53164 6.59375C9.94727 6.44688 10.3504 6.25938 10.7316 6.03438C11.6004 5.52188 12.4223 4.825 13.0004 4C12.4254 3.175 11.6004 2.47813 10.7316 1.96563C10.3504 1.74063 9.94727 1.55313 9.53164 1.40625C10.2379 2.04688 10.6816 2.97187 10.6816 4C10.6816 5.02812 10.2379 5.95312 9.53164 6.59375Z"
            fill="#495057"
          />
        </svg>
      </button>
    </div>
  );
};

const CourseDetailsPage: NextPage<CourseDetailsProps> = (props) => {
  const router = useRouter();
  const { slug: courseId } = router.query;
  const course = {
    title: "Psychology Course",
    type: "online",
    description: "Learn about hypnosis and other psychology hacks... idk",
    image: "default-course-image.png",
    link: "courselink.com",
    overview: "couseoverview.pdf",
    price: 120,
    price_currency: "USD",
    survey_link: "survey.com",
    survey_analysis: "survey.com",
  };

  const tagList = ["therapy"];

  const filesColDefs = [
    {
      headerName: i18n._(/*i18n*/ "Name"),
      field: "filename",
    },
    {
      headerName: i18n._(/*i18n*/ "action"),
      field: "action",
      cellRenderer: FileActionCell,
    },
  ];
  const fileList = [
    {
      filename: "Psychology basics pdf",
    },
    {
      filename: "Workbook.docx",
    },
    {
      filename: "Info doc.pdf",
    },
  ];

  return (
    <AdminLayout>
      <div className="container mt-16px">
        <Link
          key={`go-back-to-courses`}
          href={`/admin/courses`}
          passHref={true}
        >
          <a
            className={combineCSSClasses(
              styles["go-back-link"],
              "text-bold",
              "text-uppercase"
            )}
          >
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.06066 8.93934L2.12128 4.99997L6.06066 1.06056L5 0L0 4.99997L5 10L6.06066 8.93934Z"
                fill="#495057"
              />
            </svg>
            <span className="ml-8px">{i18n._(/*i18n*/ "Courses")}</span>
          </a>
        </Link>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-16px">
          <p className={combineCSSClasses(styles["title"], "text-primary m-0")}>
            {course.title}
          </p>

          <div>
            <button className="btn mr-8px">{i18n._(/*i18n*/ "Delete")}</button>
            <button
              className={combineCSSClasses(styles["grey-btn"], "btn mr-8px")}
            >
              {i18n._(/*i18n*/ "Preview")}
            </button>
            <button className="btn btn-primary mr-8px">
              {i18n._(/*i18n*/ "Save")}
            </button>
          </div>
        </div>
      </div>
      <div className="container  mt-16px">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Title")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                  defaultValue={course.title}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Type")}
                </label>
              </div>
              <div className="col-9">
                <DropdownList defaultValue={course.type}>
                  <option value="online">
                    {i18n._(/*i18n*/ "Online course")}
                  </option>
                  <option value="other">{i18n._(/*i18n*/ "Other")}</option>
                </DropdownList>
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Description")}
                </label>
              </div>
              <div className="col-9">
                <textarea
                  className={combineCSSClasses(styles["textarea"])}
                  defaultValue={course.description}
                ></textarea>
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Tags")}
                </label>
              </div>
              <div className="col-9">
                <TagsInput
                  defaultTags={["mental health", "therapy"]}
                  tagList={tagList}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Add to bundle")}
                </label>
              </div>
              <div className="col-9">
                <TagsInput
                  defaultTags={["Mental Health Bundle"]}
                  tagList={tagList}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Related Courses")}
                </label>
              </div>
              <div className="col-9">
                <TagsInput defaultTags={["Psych 101"]} tagList={tagList} />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Related Courses")}
                </label>
              </div>
              <div className="col-9">
                <div className="input-file-container with-prefix">
                  <input type="file" />
                  <label
                    className="custom-file-label"
                    htmlFor="exampleInputFile"
                  >
                    {course.image}
                  </label>
                  <span className="prefix">
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4V12H7V4C7 2.34687 5.65312 1 4 1C2.34687 1 1 2.34687 1 4V13C1 14.1031 1.89688 15 3 15C4.10313 15 5 14.1031 5 13V4C5 3.45 4.55 3 4 3C3.45 3 3 3.45 3 4V12H2V4C2 2.89687 2.89687 2 4 2C5.10313 2 6 2.89687 6 4V13C6 14.6531 4.65312 16 3 16C1.34687 16 0 14.6531 0 13V4C0 1.79375 1.79375 0 4 0C6.20625 0 8 1.79375 8 4Z"
                        fill="#495057"
                      />
                    </svg>
                  </span>
                </div>
                <div className="image-preview mt-8px">
                  <Image
                    src={`/${course.image}`}
                    layout="responsive"
                    width={160}
                    height={90}
                    alt="course-image"
                  />
                </div>
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Course Link")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                  defaultValue={course.link}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Course Overview")}
                </label>
              </div>
              <div className="col-9">
                <div className="input-file-container with-prefix">
                  <input type="file" />
                  <label
                    className="custom-file-label"
                    htmlFor="exampleInputFile"
                  >
                    {course.overview}
                  </label>
                  <span className="prefix">
                    <svg
                      width="8"
                      height="16"
                      viewBox="0 0 8 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4V12H7V4C7 2.34687 5.65312 1 4 1C2.34687 1 1 2.34687 1 4V13C1 14.1031 1.89688 15 3 15C4.10313 15 5 14.1031 5 13V4C5 3.45 4.55 3 4 3C3.45 3 3 3.45 3 4V12H2V4C2 2.89687 2.89687 2 4 2C5.10313 2 6 2.89687 6 4V13C6 14.6531 4.65312 16 3 16C1.34687 16 0 14.6531 0 13V4C0 1.79375 1.79375 0 4 0C6.20625 0 8 1.79375 8 4Z"
                        fill="#495057"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Price")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="number"
                  className={combineCSSClasses(styles["input"])}
                  defaultValue={course.price}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Currency")}
                </label>
              </div>
              <div className="col-9">
                <div className="d-flex gap-3 pt-8px">
                  <div>
                    <Checkbox checked={course.price_currency === "USD"} /> USD
                  </div>
                  <div>
                    <Checkbox checked={course.price_currency === "EUR"} /> EUR
                  </div>
                  <div>
                    <Checkbox checked={course.price_currency === "CAD"} /> CAD
                  </div>
                </div>
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Survey Link")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                  defaultValue={course.survey_link}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Survey Analysis")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                  defaultValue={course.survey_analysis}
                />
              </div>
            </div>

            <div className="row pt-8px">
              <div className="col-12">
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="text-bold mb-0 lh-32px">Files</p>
                  <button className="btn pt-0 pb-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7C0 3.13437 3.13437 0 7 0C10.8656 0 14 3.13437 14 7C14 10.8656 10.8656 14 7 14C3.13437 14 0 10.8656 0 7ZM8 11V8H11V6H8V3H6V6H3V8H6V11H8Z"
                        fill="#495057"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-8px">
              <CourseFilesList rowData={fileList} colDefs={filesColDefs} />
            </div>
          </div>
          <div className="col-6">
            <CourseEditor />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

type StaticPath = { params: { slug: string }; locale: string };

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const courses = new Array(10).fill(0);
  const paths: StaticPath[] = courses.map((_, index) => ({
    params: { slug: `${index}` },
    locale: "en",
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: CourseDetailsProps }> => {
  let statusCode = 200;
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      statusCode,
      seo_title: i18n._(/*i18n*/ "Course Details"),
      seo_description: "",
      translation,
    },
  };
};

export default CourseDetailsPage;
