import { InputSelectOptionProps } from "@/components/Input";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";
import Badge from "@/components/Badge/Badge";
import PageNav from "@/components/PageNav/PageNav";
import { ADMIN_PAGE_NAV } from "..";
import {
  OtlsChevronLeft,
  OtlsDownload,
  OtlsPrint,
  OtlsView,
} from "@/components/Icons";
import RatingStars from "@/components/RatingStars/RatingStars";
import Summary from "@/components/Summary/Summary";
import { EventProps } from "@/components/Summary/Event";
import styles from "@/pages/sessions/create/create.module.scss";
import TrainerInfoForm from "@/components/Admin/Trainers/TrainerInfoForm/TrainerInfoForm";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";

const Trainer = () => {
  return (
    <div className="container">
      <PageNav links={ADMIN_PAGE_NAV} />
      <div className="page__header">
        <div className="d-flex flex-column align-items-start">
          <Link href="/sessions" passHref={true}>
            <a className="page__header_back text-uppercase">
              <OtlsChevronLeft />
              {i18n._(/*i18n*/ "Trainers")}
            </a>
          </Link>
          <h1 className="page__title mb-0">Jake Peralta</h1>
          <RatingStars rating={4} />
        </div>
        <div className="page__header_ctas">
          <button type="button" className="btn btn-secondary">
            {i18n._(/*i18n*/ "Deactivate")}
          </button>
          <button type="button" className="btn btn-primary">
            {i18n._(/*i18n*/ "Edit")}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <Summary
          events={SUMMARY_EVENTS}
          sectionTitle={
            <>
              {i18n._(/*i18n*/ "Certification Information")}
              <Badge
                type="secondary"
                label={i18n._(/*i18n*/ "Active")}
                badgeClassName="ms-2"
              />
            </>
          }
        />
      </div>
      <div
        className={combineCSSClasses(
          styles.create_table_section,
          "overflow-hidden"
        )}
      >
        <TrainerInfoForm
          locationStatesSelectOptions={SELECT_OPTIONS}
          organizationSelectOptions={SELECT_OPTIONS}
          trainingLevelSelectOptions={SELECT_OPTIONS}
        />
      </div>
      <div className={styles.create_table_section}>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="h2 mb-0" style={{ fontWeight: 400 }}>
            {i18n._(/*i18n*/ "Session")}
          </h1>
          <Link href="/admin/trainers/trainer/session" passHref={true}>
            <a className="btn btn-primary">{i18n._(/*i18n*/ "Add Session")}</a>
          </Link>
        </div>
        <div className="mt-3">
          <Table
            columnTitles={PENDING_COLUMNS}
            tableData={TABLE_DATA}
            tableTitle={i18n._(/*i18n*/ "Pending Approval")}
          />
        </div>
        <div className="mt-4 pt-2">
          <Table
            columnTitles={UPCOMING_COLUMNS}
            tableData={TABLE_DATA}
            tableTitle={i18n._(/*i18n*/ "Upcoming")}
          />
        </div>
        <div className="mt-4 pt-2">
          <Table
            columnTitles={PAST_COLUMNS}
            tableData={TABLE_DATA}
            tableTitle={i18n._(/*i18n*/ "Past")}
          />
        </div>
      </div>
    </div>
  );
};

export default Trainer;

const SUMMARY_EVENTS: EventProps[] = [
  {
    name: i18n._(/*i18n*/ "Original Certification"),
    nameSize: "large",
    value: "1/22/2023",
    text: (
      <Link href="#" passHref={true}>
        {i18n._(/*i18n*/ "View certification results")}
      </Link>
    ),
  },
  {
    name: i18n._(/*i18n*/ "Last Recertification"),
    nameSize: "large",
    value: "9",
    text: (
      <Link href="#" passHref={true}>
        {i18n._(/*i18n*/ "View certification results")}
      </Link>
    ),
  },
  {
    name: i18n._(/*i18n*/ "Certification Expires"),
    nameSize: "large",
    value: "23",
  },
];

const SELECT_OPTIONS: InputSelectOptionProps[] = [
  {
    title: i18n._(/*i18n*/ "Brooklyn PD"),
    htmlProps: {
      value: "option_1",
    },
  },
  {
    title: i18n._(/*i18n*/ "VTRA Level 3"),
    htmlProps: {
      value: "option_2",
    },
  },
  {
    title: i18n._(/*i18n*/ "NY"),
    htmlProps: {
      value: "option_3",
    },
  },
];

const PENDING_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "20%" },
  {
    columnKey: "session_date",
    title: i18n._(/*i18n*/ "Session Date"),
    width: "20%",
  },
  {
    columnKey: "submitted_on",
    title: i18n._(/*i18n*/ "Submitted On"),
    width: "20%",
  },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "20%" },
  { columnKey: "materials", title: i18n._(/*i18n*/ "Materials"), width: "20%" },
];

const UPCOMING_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "20%" },
  { columnKey: "date", title: i18n._(/*i18n*/ "Date"), width: "20%" },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "20%" },
  {
    columnKey: "registrations",
    title: i18n._(/*i18n*/ "Registrations"),
    width: "20%",
  },
  { columnKey: "materials", title: i18n._(/*i18n*/ "Materials"), width: "20%" },
];

const PAST_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "20%" },
  { columnKey: "date", title: i18n._(/*i18n*/ "Date"), width: "12%" },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "8%" },
  {
    columnKey: "registrations",
    title: i18n._(/*i18n*/ "Registrations"),
    width: "12%",
  },
  { columnKey: "materials", title: i18n._(/*i18n*/ "Materials"), width: "12%" },
  {
    columnKey: "avg_rating",
    title: i18n._(/*i18n*/ "Avg Rating"),
    width: "12%",
  },
  {
    columnKey: "survey_link",
    title: i18n._(/*i18n*/ "Survey Link"),
    width: "12%",
  },
  {
    columnKey: "survey_results",
    title: i18n._(/*i18n*/ "Survey Results"),
    width: "12%",
  },
];

const TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    name: "Training Seminar",
    session_date: "Jan 01, 2022",
    date: "Jan 01, 2022",
    submitted_on: "Dec 21, 2021",
    region: "NY",
    registrations: "10",
    invited: "15",
    registration_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Copy")}</a>
      </Link>
    ),
    materials: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    avg_rating: <RatingStars rating={4} />,
    survey_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
    survey_results: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row2",
    name: "Training Seminar",
    session_date: "Jan 01, 2022",
    date: "Jan 01, 2022",
    submitted_on: "Dec 21, 2021",
    region: "NY",
    registrations: "10",
    invited: "15",
    registration_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Copy")}</a>
      </Link>
    ),
    materials: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    avg_rating: <RatingStars rating={4} />,
    survey_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
    survey_results: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row3",
    name: "Training Seminar",
    session_date: "Jan 01, 2022",
    date: "Jan 01, 2022",
    submitted_on: "Dec 21, 2021",
    region: "NY",
    registrations: "10",
    invited: "15",
    registration_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Copy")}</a>
      </Link>
    ),
    materials: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    avg_rating: <RatingStars rating={4} />,
    survey_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
    survey_results: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row4",
    name: "Training Seminar",
    session_date: "Jan 01, 2022",
    date: "Jan 01, 2022",
    submitted_on: "Dec 21, 2021",
    region: "NY",
    registrations: "10",
    invited: "15",
    registration_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Copy")}</a>
      </Link>
    ),
    materials: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    avg_rating: <RatingStars rating={4} />,
    survey_link: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
    survey_results: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "View")}</a>
      </Link>
    ),
  },
];

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};
