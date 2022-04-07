import { SearchBar, SearchBarOption, SearchBarProps } from "@credasinc/ctip-ui";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { GetStaticProps, NextPage } from "next";
import { dumbData, SEOProps } from "../../../constants";
import { i18n, Messages } from "@lingui/core";
import styles from "./organization.module.scss";
import OrganizationsList from "../../../components/organization-list";
import AdminLayout from "../../../components/admin-layout";
import OrganizationModal from "@/components/organization-modal";
import { useState } from "react";
import Link from "next/link";
import { loadTranslation } from "@/utils/translation";

interface OrganizationProps extends SEOProps {
  statusCode: number;
  translation: Messages;
}

const OrganizationPage: NextPage<any> = (props) => {
  const searchBarCallback: SearchBarProps["submitCallback"] = ({
    term,
    clickables,
  }) => {
    const params = new URLSearchParams();
    if (term) {
      params.append("q", term);
    }
    clickables.map((entry: SearchBarOption) => {
      if (entry.on) {
        params.append(entry.name, entry.value);
      }
    });
  };

  const colDefs = [
    {
      headerName: i18n._(/*i18n*/ "Date added"),
      field: "date_added",
      cellRenderer: ({ value, row }: any) => (
        <Link
          href={`/admin/organizations/details/${row?.id}`}
          key={`go-to-organizations-details-${row?.id}`}
          passHref={true}
        >
          <a className={styles["link-to-details"]}>{value}</a>
        </Link>
      ),
    },
    {
      headerName: i18n._(/*i18n*/ "Organization"),
      field: "organization",
    },
    {
      headerName: i18n._(/*i18n*/ "Type"),
      field: "type",
    },
    {
      headerName: i18n._(/*i18n*/ "Main Contact"),
      field: "main_contact",
    },
    {
      headerName: i18n._(/*i18n*/ "Location"),
      field: "location",
    },
    {
      headerName: i18n._(/*i18n*/ "Members"),
      field: "members",
      className: "text-right",
    },
    {
      headerName: i18n._(/*i18n*/ "Renewal Date"),
      field: "renewal_date",
    },
    {
      headerName: i18n._(/*i18n*/ "Created by"),
      field: "created_by",
    },
  ];

  const rowData = dumbData.map((e, index) => ({ ...e, id: index }));

  const [showNewOrganizationModal, setShowNewOrganizationModal] =
    useState(false);
  const handleOrganizationModalClose = () => setShowNewOrganizationModal(false);
  const handleOrganizationModalOpen = () => setShowNewOrganizationModal(true);

  return (
    <AdminLayout>
      <div className={combineCSSClasses("container", styles._)}>
        <div
          className={combineCSSClasses(
            "d-flex justify-content-between",
            styles["my-16px"]
          )}
        >
          <h2 className="page__title" data-testid="organization">
            {i18n._(/*i18n*/ "Organizations")}
          </h2>
          <button
            className={combineCSSClasses("btn btn-primary", styles["my-8px"])}
            data-toggle="modal"
            data-target="#organization-modal"
            onClick={handleOrganizationModalOpen}
            data-testid="add-organization"
          >
            {i18n._(/*i18n*/ "Add Organization")}
          </button>
        </div>
        <div data-testid="search-organization">
          <SearchBar
            changeCallback={searchBarCallback}
            submitCallback={searchBarCallback}
            initialTerm={props.searchTerm}
            clickables={[
              {
                label: "Label test",
                name: "Name",
                value: "Any",
              },
            ]}
            preventFormSubmit={true}
            labels={{
              placeholder: i18n._(/*i18n*/ "Search organizations"),
              clearSelection: i18n._(/*i18n*/ "Clear selection"),
              clickables: i18n._(/*i18n*/ "Popular tags"),
            }}
          />
        </div>
        <OrganizationModal
          showModal={showNewOrganizationModal}
          handleClose={handleOrganizationModalClose}
        />
        <OrganizationsList colDefs={colDefs} rowData={rowData} />
      </div>
    </AdminLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: OrganizationProps }> => {
  let statusCode = 200;
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      statusCode,
      seo_title: i18n._(/*i18n*/ "Organizations"),
      seo_description: "",
      translation,
    },
  };
};

export default OrganizationPage;
