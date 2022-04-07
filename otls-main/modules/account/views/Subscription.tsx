import Card from "@/components/Card";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import Label from "@/components/Text";
import Input from "@/components/Form/Input";
import Checkbox from "@/components/Form/Checkbox";
import Link from "@/components/Link";
import { Table } from "@/components/Table";

import SubscriptionPerYear from "../components/subscription/SubscriptionPerYear";
import SubscriptionFree from "../components/subscription/SubscriptionFree";
import ShippingBilling from "../components/subscription/ShippingBilling";

interface SubscriptionViewProps {
  i18n: any;
}

export interface SubscriptionCardProps {
  i18n: any;
  setSubscribe?: (value: boolean) => void;
}

const Subscription = (props: SubscriptionViewProps) => {
  const { i18n } = props;
  const [subscribe, setSubscribe] = useState<boolean>(false);
  return (
    <div
      className="d-flex flex-column mt-4"
      style={{
        gap: "3rem",
      }}
    >
      {!subscribe ? (
        <SubscriptionFree i18n={i18n} setSubscribe={setSubscribe} />
      ) : (
        <SubscriptionPerYear i18n={i18n} setSubscribe={setSubscribe} />
      )}
      {/* shipping & billing */}
      <ShippingBilling i18n={i18n} />
      {/* transaction history */}
      <div>
        <Heading variant={"title"}>
          <h1 className="title text-capitalize">
            {i18n._(/*i18n*/ "transaction history")}
          </h1>
        </Heading>
        <div className="my-5">
          <Table
            columnTitles={[
              {
                title: i18n._(/*i18n*/ "date"),
                columnKey: "date",
                isSortable: true,
                width: "200px",
              },
              {
                title: i18n._(/*i18n*/ "item"),
                columnKey: "item",
                width: "400px",
              },
              {
                title: i18n._(/*i18n*/ "price"),
                columnKey: "price",
                width: "200px",
                CustomCell: (props: any) => <span>$ {props.row.price}</span>,
              },
              {
                title: i18n._(/*i18n*/ "invoice"),
                columnKey: "invoice",
                width: "200px",
                CustomCell: (props: any) => (
                  <Link
                    href={`/view/${props.row.rowKey}`}
                    content={<span>{i18n._(/*i18n*/ "view")} </span>}
                  />
                ),
              },
            ]}
            tableData={[
              {
                rowKey: "1",
                date: "12/15/2020",
                item: "Course",
                price: "1000",
              },
              {
                rowKey: "2",
                date: "12/1/2020",
                item: "Course",

                price: "1000",
              },
              {
                rowKey: "3",
                date: "12/12/2020",
                item: "Course",
                type: "VTRA Training",
                price: "100",
              },
              {
                rowKey: "4",
                date: "12/10/2020",
                item: "Course",
                price: "1000",
              },
              {
                rowKey: "5",
                date: "12/18/2020",
                item: "Course",
                price: "100",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
