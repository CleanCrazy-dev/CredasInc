import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";
import PageNav from "@/components/PageNav/PageNav";
import { ADMIN_PAGE_NAV } from "..";
import {
  OtlsCheck,
  OtlsChevronLeft,
  OtlsChevronRight,
  OtlsDownload,
  OtlsPrint,
  OtlsView,
} from "@/components/Icons";
import styles from "@/pages/sessions/create/create.module.scss";
import CreateSessionForm from "@/components/Sessions/CreateSessionForm/CreateSessionForm";
import { SELECT_OPTIONS } from "@/pages/sessions/create";

const Session = () => {
  return (
    <div className="container">
      <PageNav links={ADMIN_PAGE_NAV} />
      <div className="page__header">
        <div className="d-flex flex-column align-items-start">
          <Link href="/trainers/trainer" passHref={true}>
            <a className="page__header_back text-uppercase">
              <OtlsChevronLeft />
              {i18n._(/*i18n*/ "Trainers")} » Jake Peralta
            </a>
          </Link>
          <h1 className="page__title mb-0">
            {i18n._(/*i18n*/ "Training Seminar")}
          </h1>
        </div>
        <div className="page__header_ctas">
          <button type="button" className="btn btn-secondary">
            {i18n._(/*i18n*/ "Edit Session")}
          </button>
          <button type="button" className="btn btn-primary">
            {i18n._(/*i18n*/ "Approve")}
          </button>
        </div>
      </div>
      <CreateSessionForm
        organizerSelectOptions={SELECT_OPTIONS}
        typeSelectOptions={SELECT_OPTIONS}
        repeatSelectOptions={SELECT_OPTIONS}
        timezoneSelectOptions={SELECT_OPTIONS}
        locationStatesSelectOptions={SELECT_OPTIONS}
      />
      <div className={styles.create_table_section}>
        <Table
          columnTitles={TABLE_COLUMNS}
          tableData={TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Materials")}
          tableTitleSize="large"
          tableCTAs={
            <>
              <button type="button" className="btn btn-primary">
                {i18n._(/*i18n*/ "Add Files")}
              </button>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Session;

const TABLE_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "20%" },
  { columnKey: "pages", title: i18n._(/*i18n*/ "Pages"), width: "20%" },
  {
    columnKey: "uploaded_on",
    title: i18n._(/*i18n*/ "Uploaded On"),
    width: "20%",
  },
  { columnKey: "actions", title: i18n._(/*i18n*/ "Actions"), width: "20%" },
  {
    columnKey: "approve",
    title: i18n._(/*i18n*/ "Approve"),
    width: "20%",
  },
];

const TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    name: "Training Seminar",
    pages: "16",
    uploaded_on: "Jan 01, 2022",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    approve: (
      <span
        style={{ fontSize: "0.875rem", fontWeight: 700, lineHeight: 2.8859 }}
      >
        <OtlsCheck className="me-2" /> {i18n._(/*i18n*/ "Approved")}
      </span>
    ),
  },
  {
    rowKey: "row2",
    name: "Training Seminar",
    pages: "16",
    uploaded_on: "Jan 01, 2022",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    approve: (
      <span
        style={{ fontSize: "0.875rem", fontWeight: 700, lineHeight: 2.8859 }}
      >
        <OtlsCheck className="me-2" />
        {i18n._(/*i18n*/ "Approved")}
      </span>
    ),
  },
  {
    rowKey: "row3",
    name: "Training Seminar",
    pages: "16",
    uploaded_on: "Jan 01, 2022",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
    approve: (
      <button className="btn btn-secondary" type="button">
        {i18n._(/*i18n*/ "Approve")}
      </button>
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
