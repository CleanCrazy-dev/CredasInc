import { loadTranslation } from "@/utils/translation";
import { GetStaticProps } from "next";
import { i18n } from "@lingui/core";
import Image from "next/image";
import SingleFeature from "@/components/Premium/SingleFeature/SingleFeature";
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Table, TableColumnTitle, TableRowData } from "@/components/Table";
import {
  tableDataCell,
  TableFootCell,
  TableHeadCell,
} from "@/components/Premium/PremiumTableParts";
import { formatMoney } from "@/utils/formatter";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Upgrade = () => {
  const router = useRouter();
  const locale = useMemo(
    () => router.locale || router.defaultLocale || "en",
    [router]
  );

  return (
    <>
      <div className="py-16 relative">
        <div className="absolute top-0 w-full h-full overflow-y-hidden">
          <Image
            src="/unsplash_75nbwHfDsnY.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-sky-300 opacity-20"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            <div className="border-8 border-gray-800 p-14">
              <h1 className="mb-8 font-bold text-gray-700 text-4.5xl">
                {i18n._(/*i18n*/ "CTIP Premium")}
              </h1>
              <p className="text-gray-700 text-2.5xl mb-0">
                {i18n._(
                  /*i18n*/ "Access the tools, courses, and resources to make your community safe."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SingleFeature
              name={i18n._(/*i18n*/ "Learning")}
              icon={regular("book")}
              featuresList={[
                i18n._(/*i18n*/ "Microlearning Courses"),
                i18n._(/*i18n*/ "Online Learning"),
                i18n._(/*i18n*/ "CTIP Talks"),
                i18n._(/*i18n*/ "Premium Articles & Guides"),
              ]}
            />
            <SingleFeature
              name={i18n._(/*i18n*/ "Tools")}
              icon={regular("wrench")}
              iconClassName="fa-flip-horizontal"
              featuresList={[
                i18n._(/*i18n*/ "Ask CTIP"),
                i18n._(/*i18n*/ "Critical Periods"),
                i18n._(/*i18n*/ "Trends"),
                i18n._(/*i18n*/ "Reports"),
              ]}
            />
            <SingleFeature
              name={i18n._(/*i18n*/ "Community")}
              icon={regular("user")}
              featuresList={[
                i18n._(/*i18n*/ "Community Protocols"),
                `${i18n._(/*i18n*/ "Live Training Sessions")}*`,
                `${i18n._(/*i18n*/ "Seminars")}*`,
                `${i18n._(/*i18n*/ "Outreach Portal")}*`,
              ]}
              note={`*${i18n._(/*i18n*/ "Extra cost")}`}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-20">
        <div className="container">
          <p className="text-gray-700 text-4.5xl mb-14">
            {i18n._(/*i18n*/ "Compare Options")}
          </p>
          <Table
            columnTitles={TABLE_COLUMNS}
            tableData={TABLE_DATA}
            isBgTransparent={true}
            isCustomTableHead={true}
            theadClassName="align-top border-b-8 border-gray-600"
            tdClassName="!text-xl font-bold !py-3"
            tableFootRows={TABLE_FOOT}
            tfootClassName="align-top border-t-8 border-gray-600"
          />
        </div>
      </div>
    </>
  );
};

export default Upgrade;

const TABLE_COLUMNS: TableColumnTitle[] = [
  {
    columnKey: "feature",
    title: "",
    width: "24%",
  },
  {
    columnKey: "member",
    title: (
      <TableHeadCell
        name={i18n._(/*i18n*/ "Member")}
        price={formatMoney(0, true)}
      />
    ),
    width: "18%",
  },
  {
    columnKey: "subscriber",
    title: (
      <TableHeadCell
        name={i18n._(/*i18n*/ "Subscriber")}
        price={`${formatMoney(300, true)}/${i18n._(/*i18n*/ "year")}`}
        description={`${i18n._(/*i18n*/ "or")} ${formatMoney(
          30,
          true
        )}/${i18n._(/*i18n*/ "month")}`}
      />
    ),
    width: "18%",
  },
  {
    columnKey: "premium",
    title: (
      <TableHeadCell
        name={i18n._(/*i18n*/ "Premium")}
        price={`${formatMoney(500, true)}/${i18n._(/*i18n*/ "year")}`}
        description={`${i18n._(/*i18n*/ "or")} ${formatMoney(
          50,
          true
        )}/${i18n._(/*i18n*/ "month")}`}
      />
    ),
    width: "18%",
  },
  {
    columnKey: "team",
    title: (
      <TableHeadCell
        name={i18n._(/*i18n*/ "Team")}
        link={{ label: i18n._(/*i18n*/ "Contact Us"), url: "#" }}
      />
    ),
    width: "22%",
  },
];

const TABLE_DATA: TableRowData[] = [
  {
    rowKey: "row1",
    feature: i18n._(/*i18n*/ "News Alerts"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("check"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row2",
    feature: i18n._(/*i18n*/ "CTIP Articles"),
    member: tableDataCell("check"),
    subscriber: tableDataCell("check"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row3",
    feature: i18n._(/*i18n*/ "Resources"),
    member: tableDataCell("check"),
    subscriber: tableDataCell("check"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row4",
    feature: i18n._(/*i18n*/ "CTIP Talks"),
    member: tableDataCell("text", `3 ${i18n._(/*i18n*/ "Free Talks")}`),
    subscriber: tableDataCell("check"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row5",
    feature: i18n._(/*i18n*/ "Microlearning"),
    member: tableDataCell("text", `1 ${i18n._(/*i18n*/ "Free Videos")}`),
    subscriber: tableDataCell("check"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row6",
    feature: i18n._(/*i18n*/ "Online Courses"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("text", ` 1 ${i18n._(/*i18n*/ "Free Course")}`),
    premium: tableDataCell("text", `1 ${i18n._(/*i18n*/ "Free Course")}`),
    team: tableDataCell("text", `1 ${i18n._(/*i18n*/ "Free Course")}`),
  },
  {
    rowKey: "row7",
    feature: i18n._(/*i18n*/ "Microlearning CE"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("text", `8 ${i18n._(/*i18n*/ "Hours")}`),
    team: tableDataCell("text", `8 ${i18n._(/*i18n*/ "Hours")}`),
  },
  {
    rowKey: "row8",
    feature: i18n._(/*i18n*/ "Critical Periods"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row9",
    feature: i18n._(/*i18n*/ "Tips & Referrals"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row10",
    feature: i18n._(/*i18n*/ "Ask CTIP"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row11",
    feature: i18n._(/*i18n*/ "Trends"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row12",
    feature: i18n._(/*i18n*/ "Outreach Portal"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("check"),
    team: tableDataCell("check"),
  },
  {
    rowKey: "row13",
    feature: i18n._(/*i18n*/ "Outreach Collaborator"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("empty"),
    team: tableDataCell("text", i18n._(/*i18n*/ "Available at extra cost")),
  },
  {
    rowKey: "row14",
    feature: i18n._(/*i18n*/ "Genogram Maker"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("empty"),
    team: tableDataCell("text", i18n._(/*i18n*/ "Available at extra cost")),
  },
  {
    rowKey: "row15",
    feature: i18n._(/*i18n*/ "Single Sign-On"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("empty"),
    team: tableDataCell("text", i18n._(/*i18n*/ "Available at extra cost")),
  },
  {
    rowKey: "row16",
    feature: i18n._(/*i18n*/ "Data Integration"),
    member: tableDataCell("empty"),
    subscriber: tableDataCell("empty"),
    premium: tableDataCell("empty"),
    team: tableDataCell("text", i18n._(/*i18n*/ "Available at extra cost")),
  },
];

const TABLE_FOOT: TableRowData[] = [
  {
    rowKey: "foot",
    feature: <p className="mb-0 text-2.5xl">{i18n._(/*i18n*/ "Cost")}</p>,
    member: <p className="mb-0 text-2.5xl">{formatMoney(0, true)}</p>,
    subscriber: (
      <TableFootCell
        name={`${formatMoney(300, true)}/${i18n._(/*i18n*/ "year")}`}
        description={`${i18n._(/*i18n*/ "or")} ${formatMoney(
          30,
          true
        )}/${i18n._(/*i18n*/ "month")}`}
        link={{ label: i18n._(/*i18n*/ "Subscribe"), url: "/upgrade/register" }}
      />
    ),
    premium: (
      <TableFootCell
        name={`${formatMoney(500, true)}/${i18n._(/*i18n*/ "year")}`}
        description={`${i18n._(/*i18n*/ "or")} ${formatMoney(
          50,
          true
        )}/${i18n._(/*i18n*/ "month")}`}
        link={{
          label: i18n._(/*i18n*/ "Get premium"),
          url: "/upgrade/register",
        }}
      />
    ),
    team: (
      <TableFootCell
        name={i18n._(/*i18n*/ "Contact us for more info")}
        link={{
          label: i18n._(/*i18n*/ "Contact us"),
          url: "/upgrade/register",
        }}
      />
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
