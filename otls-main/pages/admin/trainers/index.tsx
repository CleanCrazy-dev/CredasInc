import {
  InputField,
  InputSelect,
  InputSelectOptionProps,
} from "@/components/Input";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import { GetStaticProps } from "next";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";
import Badge from "@/components/Badge/Badge";
import PageNav, { PageNavLink } from "@/components/PageNav/PageNav";

const Trainers = () => {
  return (
    <div className="container">
      <PageNav links={ADMIN_PAGE_NAV} />
      <div className="page__header">
        <h1 className="page__title mb-0">{i18n._(/*i18n*/ "Trainers")}</h1>
        <Link href="/admin/trainers/create" passHref={true}>
          <a className="btn btn-primary">{i18n._(/*i18n*/ "Add Trainer")}</a>
        </Link>
      </div>
      <div className="mt-4">
        <InputField
          type="text"
          htmlProps={{
            placeholder: i18n._(/*i18n*/ "Search trainers"),
          }}
        />
      </div>
      <div className="pt-3">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-4 gy-3">
          <div>
            <InputSelect
              label={i18n._(/*i18n*/ "Sort by")}
              htmlProps={{
                defaultValue: "option_1",
                className: "disabled",
              }}
              options={SELECT_OPTIONS}
            />
          </div>
          <div>
            <InputSelect
              label={i18n._(/*i18n*/ "Region")}
              htmlProps={{ defaultValue: "option_2" }}
              options={SELECT_OPTIONS}
            />
          </div>
          <div>
            <InputSelect
              label={i18n._(/*i18n*/ "Organization")}
              htmlProps={{ defaultValue: "option_2" }}
              options={SELECT_OPTIONS}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table columnTitles={TABLE_COLUMNS} tableData={TABLE_DATA} />
      </div>
    </div>
  );
};

export default Trainers;

export const ADMIN_PAGE_NAV: PageNavLink[] = [
  {
    label: i18n._(/*i18n*/ "Organizations"),
    url: "/admin/organizations",
  },
  {
    label: i18n._(/*i18n*/ "Permissions"),
    url: "/admin/permissions",
  },
  {
    label: i18n._(/*i18n*/ "Events"),
    url: "/admin/events",
  },
  {
    label: i18n._(/*i18n*/ "Ask ctip"),
    url: "/admin/ask-ctip",
  },
  {
    label: i18n._(/*i18n*/ "Trainers"),
    url: "/admin/trainers",
  },
  {
    label: i18n._(/*i18n*/ "Partners"),
    url: "/admin/partners",
  },
  {
    label: i18n._(/*i18n*/ "Courses"),
    url: "/admin/courses",
  },
  {
    label: i18n._(/*i18n*/ "Resources"),
    url: "/admin/resources",
  },
  {
    label: i18n._(/*i18n*/ "Protocols"),
    url: "/admin/protocols",
  },
];

const SELECT_OPTIONS: InputSelectOptionProps[] = [
  {
    title: i18n._(/*i18n*/ "Name"),
    htmlProps: {
      value: "option_1",
    },
  },
  {
    title: i18n._(/*i18n*/ "All"),
    htmlProps: {
      value: "option_2",
    },
  },
];

const TABLE_COLUMNS: TableColumnTitle[] = [
  { columnKey: "name", title: i18n._(/*i18n*/ "Name"), width: "15%" },
  { columnKey: "region", title: i18n._(/*i18n*/ "Region"), width: "8%" },
  { columnKey: "email", title: i18n._(/*i18n*/ "Email"), width: "20%" },
  { columnKey: "phone", title: i18n._(/*i18n*/ "Phone"), width: "13%" },
  {
    columnKey: "organization",
    title: i18n._(/*i18n*/ "Organization"),
    width: "22%",
  },
  {
    columnKey: "sessions_held",
    title: i18n._(/*i18n*/ "Sessions Held"),
    width: "10%",
  },
  {
    columnKey: "training_complete",
    title: i18n._(/*i18n*/ "Training Complete"),
    width: "12%",
  },
];

const TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),
    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: <Badge type="primary" label="1" />,
    training_complete: "January 15, 2022",
  },
  {
    rowKey: "row2",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),

    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: "",
    training_complete: "January 15, 2022",
  },
  {
    rowKey: "row3",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),

    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: <Badge type="primary" label="3" />,
    training_complete: "January 15, 2022",
  },
  {
    rowKey: "row4",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),

    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: <Badge type="primary" label="1" />,
    training_complete: "January 15, 2022",
  },
  {
    rowKey: "row5",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),

    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: <Badge type="primary" label="1" />,
    training_complete: "January 15, 2022",
  },
  {
    rowKey: "row6",
    name: (
      <Link href="/admin/trainers/trainer" passHref={true}>
        Jake Peralta
      </Link>
    ),

    region: "NY",
    email: "jperalta@b99.com",
    phone: "(123) 456-7890",
    organization: "Dunder Mifflin Paper Company",
    sessions_held: <Badge type="primary" label="1" />,
    training_complete: "January 15, 2022",
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
