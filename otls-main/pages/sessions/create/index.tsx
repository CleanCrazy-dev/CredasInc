import {
  OtlsChevronLeft,
  OtlsDownload,
  OtlsPrint,
  OtlsView,
} from "@/components/Icons";
import { InputSelectOptionProps } from "@/components/Input";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";
import CreateSessionForm from "@/components/Sessions/CreateSessionForm/CreateSessionForm";
import styles from "./create.module.scss";
import { useState } from "react";
import { boolean } from "yup";

const Create = () => {
  return (
    <div className="container" data-testid="add_sessions">
      <form data-testid="add_form_sessions">
        <div className="page__header">
          <div className="d-flex flex-column align-items-start">
            <Link href="/sessions" passHref={true}>
              <a className="page__header_back text-uppercase">
                <OtlsChevronLeft />
                {i18n._(/*i18n*/ "Sessions")}
              </a>
            </Link>
            <h1 className="page__title mb-0">
              {i18n._(/*i18n*/ "Create Session")}
            </h1>
          </div>
          <button className="btn btn-primary" type="submit">
            {i18n._(/*i18n*/ "Submit For Approval")}
          </button>
        </div>
        <CreateSessionForm
          organizerSelectOptions={SELECT_OPTIONS}
          typeSelectOptions={SELECT_OPTIONS}
          repeatSelectOptions={SELECT_OPTIONS}
          timezoneSelectOptions={SELECT_OPTIONS}
          locationStatesSelectOptions={SELECT_OPTIONS}
        />
      </form>
      <div className={styles.create_table_section}>
        <Table
          columnTitles={TABLE_COLUMNS}
          tableData={TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Materials")}
          tableTitleSize="large"
        />
      </div>
    </div>
  );
};

export default Create;

export const SELECT_OPTIONS: InputSelectOptionProps[] = [
  {
    title: i18n._(/*i18n*/ "Select option..."),
    htmlProps: {
      value: "default",
      disabled: true,
    },
  },
  {
    title: i18n._(/*i18n*/ "Raymond Holt"),
    htmlProps: {
      value: "option_1",
    },
  },
  {
    title: i18n._(/*i18n*/ "VTRA Training"),
    htmlProps: {
      value: "option_2",
    },
  },
  {
    title: i18n._(/*i18n*/ "CST"),
    htmlProps: {
      value: "option_3",
    },
  },
  {
    title: i18n._(/*i18n*/ "None"),
    htmlProps: {
      value: "option_4",
    },
  },
  {
    title: i18n._(/*i18n*/ "NY"),
    htmlProps: {
      value: "option_5",
    },
  },
];

export const TABLE_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "25%" },
  { columnKey: "pages", title: i18n._(/*i18n*/ "Pages"), width: "25%" },
  {
    columnKey: "uploaded_on",
    title: i18n._(/*i18n*/ "Uploaded On"),
    width: "25%",
  },
  { columnKey: "actions", title: i18n._(/*i18n*/ "Actions"), width: "25%" },
];

export const TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    name: "Workbook.pdf",
    pages: "16",
    uploaded_on: "December 29, 2021",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
  },
  {
    rowKey: "row2",
    name: "Workbook.pdf",
    pages: "16",
    uploaded_on: "December 29, 2021",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
  },
  {
    rowKey: "row3",
    name: "Workbook.pdf",
    pages: "16",
    uploaded_on: "December 29, 2021",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
    ),
  },
  {
    rowKey: "row4",
    name: "Workbook.pdf",
    pages: "16",
    uploaded_on: "December 29, 2021",
    actions: (
      <>
        <OtlsDownload className="me-3" />
        <OtlsPrint className="me-3" />
        <OtlsView />
      </>
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
