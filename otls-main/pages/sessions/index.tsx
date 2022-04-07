import HelpBox from "@/components/HelpBox/HelpBox";
import { EventProps } from "@/components/Summary/Event";
import Summary from "@/components/Summary/Summary";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { i18n } from "@lingui/core";
import { loadTranslation } from "@/utils/translation";

const Sessions = () => {
  return (
    <div className="container">
      <div className="page__header">
        <h1 className="page__title mb-0">{i18n._(/*i18n*/ "Sessions")}</h1>
        <Link href="/sessions/create" passHref={true}>
          <a className="btn btn-primary" data-testid="add-session">
            {i18n._(/*i18n*/ "Add Session")}
          </a>
        </Link>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-lg-9">
            <Summary
              events={SUMMARY_EVENTS}
              sectionTitle={i18n._(/*i18n*/ "My Summary")}
            />
          </div>
          <div className="col-lg-3 mt-3 mt-lg-0">
            <HelpBox
              title={i18n._(/*i18n*/ "Have questions?")}
              description={i18n._(
                /*i18n*/ "Check out our FAQ or contact a training director for more information."
              )}
              linkLabel={i18n._(/*i18n*/ "Add Session")}
              linkUrl="#"
              styling={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-4" data-testid="pending_columns">
        <Table
          columnTitles={PENDING_COLUMNS}
          tableData={TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Pending Approval")}
        />
      </div>
      <div className="mt-4 pt-2" data-testid="upcomming_columns">
        <Table
          columnTitles={UPCOMING_COLUMNS}
          tableData={TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Upcoming")}
        />
      </div>
      <div className="mt-4 pt-2" data-testid="past_columns">
        <Table
          columnTitles={PAST_COLUMNS}
          tableData={TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Past")}
        />
      </div>
    </div>
  );
};

export default Sessions;

export const PENDING_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "25%" },
  {
    columnKey: "session_date",
    title: i18n._(/*i18n*/ "Session Date"),
    width: "25%",
  },
  {
    columnKey: "submitted_on",
    title: i18n._(/*i18n*/ "Submitted On"),
    width: "25%",
  },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "25%" },
];

export const UPCOMING_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "25%" },
  { columnKey: "date", title: i18n._(/*i18n*/ "Date"), width: "12.5%" },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "12.5%" },
  { columnKey: "invited", title: i18n._(/*i18n*/ "Invited"), width: "12.5%" },
  {
    columnKey: "registrations",
    title: i18n._(/*i18n*/ "Registrations"),
    width: "12.5%",
  },
  {
    columnKey: "registration_link",
    title: i18n._(/*i18n*/ "Registration Link"),
    width: "12.5%",
  },
  { columnKey: "invite", title: i18n._(/*i18n*/ "Invite"), width: "12.5%" },
];

export const PAST_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "25%" },
  { columnKey: "date", title: i18n._(/*i18n*/ "Date"), width: "25%" },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "25%" },
  {
    columnKey: "registrations",
    title: i18n._(/*i18n*/ "Registrations"),
    width: "25%",
  },
];

export const TABLE_DATA: TableRowData[] = [
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
    invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Invite")}</a>
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
    invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Invite")}</a>
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
    invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Invite")}</a>
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
    invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Invite")}</a>
      </Link>
    ),
  },
];

export const SUMMARY_EVENTS: EventProps[] = [
  {
    name: i18n._(/*i18n*/ "Certification Expires"),
    value: "1/22/2023",
  },
  {
    name: i18n._(/*i18n*/ "Sessions held this year"),
    value: "9",
  },
  {
    name: i18n._(/*i18n*/ "Sessions held all time"),
    value: "23",
  },
  {
    name: i18n._(/*i18n*/ "Original Certification"),
    value: "1/22/2021",
  },
  {
    name: i18n._(/*i18n*/ "People trained this year"),
    value: "102",
  },
  {
    name: i18n._(/*i18n*/ "People trained all time"),
    value: "341",
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
