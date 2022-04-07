import { useCallback, useState } from "react";
import { OtlsCheck, OtlsChevronLeft } from "@/components/Icons";
import { InputChips } from "@/components/Input";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";
import CreateSessionForm from "@/components/Sessions/CreateSessionForm/CreateSessionForm";
import styles from "./create/create.module.scss";
import Modal from "@/components/Modal/Modal";
import { SELECT_OPTIONS, TABLE_COLUMNS, TABLE_DATA } from "./create";
import Dropdown from "@/components/Dropdown/Dropdown";

const Update = () => {
  const [hasEmails, setHasEmails] = useState(false);

  const onChangeEmails = useCallback((emails: string[]) => {
    setHasEmails(emails.length > 0);
  }, []);

  return (
    <div className="container">
      <Modal
        id="inviteUsersModal"
        title={i18n._(/*i18n*/ "Invite")}
        footer={
          <>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-secondary"
            >
              {i18n._(/*i18n*/ "Cancel")}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!hasEmails}
            >
              {i18n._(/*i18n*/ "Invite")}
            </button>
          </>
        }
      >
        <p>
          {i18n._(
            /*i18n*/ "Invitees will get a link to register for the session."
          )}
        </p>
        <InputChips
          note={i18n._(/*i18n*/ "Add multiple, separate with commas")}
          placeholder={i18n._(/*i18n*/ "Enter emails")}
          onChange={onChangeEmails}
          validateInput="email"
        />
      </Modal>
      <form data-testid="update_form">
        <div className="page__header">
          <div className="d-flex flex-column align-items-start">
            <Link href="/sessions" passHref={true}>
              <a className="page__header_back text-uppercase">
                <OtlsChevronLeft />
                {i18n._(/*i18n*/ "Sessions")}
              </a>
            </Link>
            <h1 className="page__title mb-0">
              {i18n._(/*i18n*/ "VTRA Level One - Day One")}
            </h1>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            data-testid="edit_session"
          >
            {i18n._(/*i18n*/ "Edit")}
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
          columnTitles={INVITE_TABLE_COLUMNS}
          tableData={INVITE_TABLE_DATA}
          tableTitle={i18n._(/*i18n*/ "Invited & Registered")}
          tableTitleSize="large"
          tableCTAs={
            <>
              <button className="btn btn-secondary" type="button">
                {i18n._(/*i18n*/ "Copy registration link")}
              </button>
              <Dropdown
                buttonLabel={i18n._(/*i18n*/ "Invite")}
                dropdownAlignment="end"
                buttonClassName="btn-primary"
                dropdownOptions={[
                  {
                    label: i18n._(/*i18n*/ "Invite"),
                    type: "button",
                    buttonProps: {
                      "data-bs-toggle": "modal",
                      "data-bs-target": "#inviteUsersModal",
                    },
                  },
                  {
                    label: i18n._(/*i18n*/ "Bulk Invite (CSV or XLS)"),
                    type: "button",
                  },
                ]}
              />
            </>
          }
        />
      </div>
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

export default Update;

export const INVITE_TABLE_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "25%" },
  { columnKey: "email", title: i18n._(/*i18n*/ "Email"), width: "20%" },
  { columnKey: "phone", title: i18n._(/*i18n*/ "Phone"), width: "15%" },
  {
    columnKey: "registered",
    title: i18n._(/*i18n*/ "Registered"),
    width: "10%",
  },
  { columnKey: "attended", title: i18n._(/*i18n*/ "Attended"), width: "20%" },
  {
    columnKey: "send_invite",
    title: i18n._(/*i18n*/ "Send Invite"),
    width: "10%",
  },
];

export const INVITE_TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    name: "Raymond Holt",
    email: "rholt@b99.com",
    phone: "(123) 456-7890",
    registered: <OtlsCheck />,
    attended: <OtlsCheck />,
    send_invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Send")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row2",
    name: "Raymond Holt",
    email: "rholt@b99.com",
    phone: "(123) 456-7890",
    registered: "",
    attended: (
      <span className="text_disabled" style={{ cursor: "pointer" }}>
        {i18n._(/*i18n*/ "Click to mark attendance")}
      </span>
    ),
    send_invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Send")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row3",
    name: "Raymond Holt",
    email: "rholt@b99.com",
    phone: "(123) 456-7890",
    registered: <OtlsCheck />,
    attended: <OtlsCheck />,
    send_invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Send")}</a>
      </Link>
    ),
  },
  {
    rowKey: "row4",
    name: "Raymond Holt",
    email: "rholt@b99.com",
    phone: "(123) 456-7890",
    registered: <OtlsCheck />,
    attended: <OtlsCheck />,
    send_invite: (
      <Link href="#" passHref={true}>
        <a>{i18n._(/*i18n*/ "Send")}</a>
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
