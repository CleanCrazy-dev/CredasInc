import Heading from "@/components/Heading";
import Link from "@/components/Link";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Table } from "@/components/Table";
import Text from "@/components/Text";
import React from "react";
import { I18n } from "@lingui/core";
import CourseBadge from "../components/course/CourseBadge";
import CourseCardList from "../components/course/CourseCardList";

interface CourseViewProps {
  i18n: I18n;
}
const CourseView = (props: CourseViewProps) => {
  const { i18n } = props;
  return (
    <div
      className="d-flex flex-column mt-4"
      style={{
        gap: "3rem",
      }}
    >
      {/* badges */}
      <CourseBadge />
      <CourseCardList i18n={i18n} />

      {/* course table */}
      <div>
        <Heading variant={"title"}>
          <h1 className="title text-capitalize">
            {i18n._(/*i18n*/ "completed")}
          </h1>
        </Heading>
        <div className="my-5">
          <Table
            columnTitles={[
              {
                title: i18n._(/*i18n*/ "date completed"),
                columnKey: "date_completed",
                isSortable: true,
              },
              {
                title: i18n._(/*i18n*/ "course/sessions"),
                columnKey: "course",
              },
              {
                title: i18n._(/*i18n*/ "type"),
                columnKey: "type",
              },
              {
                title: i18n._(/*i18n*/ "price"),
                columnKey: "price",
                CustomCell: (props: any) => <span>$ {props.row.price}</span>,
              },
              {
                title: i18n._(/*i18n*/ "certificate"),
                columnKey: "certificate",
                CustomCell: (props: any) => (
                  <Link
                    href={`/view/${props.row.rowKey}`}
                    content={<span>{i18n._(/*i18n*/ "view")}</span>}
                  />
                ),
              },
            ]}
            tableData={[
              {
                rowKey: "1",
                date_completed: "12/15/2020",
                course: "Course",
                type: "Online Course",
                price: "1000",
              },
              {
                rowKey: "2",
                date_completed: "12/1/2020",
                course: "Course",
                type: "Microlearning",
                price: "1000",
              },
              {
                rowKey: "3",
                date_completed: "12/12/2020",
                course: "Course",
                type: "VTRA Training",
                price: "100",
              },
              {
                rowKey: "4",
                date_completed: "12/10/2020",
                course: "Course",
                type: "Microlearning",
                price: "1000",
              },
              {
                rowKey: "5",
                date_completed: "12/18/2020",
                course: "Course",
                type: "VTRA Training",
                price: "100",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseView;
