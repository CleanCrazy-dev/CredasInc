import { i18n, Messages } from "@lingui/core";
import {
  SEOProps,
  US_STATES_AND_CANADIAN_TERRITORIES,
} from "../../../../constants";
import { GetStaticProps, NextPage } from "next";
import AdminLayout from "@/components/admin-layout";
import Link from "next/link";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./new-org.module.scss";
import { useRouter } from "next/router";
import { SearchBar, SearchBarOption, SearchBarProps } from "@credasinc/ctip-ui";
import DropdownList from "@/components/Dropdown-list";
import OrganizationMembersList from "@/components/organization-member-list";
import { useState } from "react";
import OrganizationMemberModal from "@/components/organization-member-modal";
import TabLinks, { TabLink } from "@/components/Tab-Links";
import { loadTranslation } from "@/utils/translation";

interface NewOrganizationProps extends SEOProps {
  statusCode: number;
  translation: Messages;
  searchTerm?: any;
  searchClickables?: any;
}

const NewOrganizationPage: NextPage<NewOrganizationProps> = (props) => {
  const router = useRouter();
  const { slug: organizationId } = router?.query || {};

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
  const membersColDefs = [
    {
      headerName: i18n._(/*i18n*/ "Name"),
      field: "name",
    },
    {
      headerName: i18n._(/*i18n*/ "Role"),
      field: "role",
    },
    {
      headerName: i18n._(/*i18n*/ "Email"),
      field: "email",
    },
    {
      headerName: i18n._(/*i18n*/ "Phone"),
      field: "phone",
    },
    {
      headerName: i18n._(/*i18n*/ "Org Access"),
      field: "org_access",
    },
    {
      headerName: i18n._(/*i18n*/ "VTRA Trained"),
      field: "vtra_trained",
    },
  ];

  const [members, setMembers] = useState([]);

  const handleRowClicked = () => {
    console.log("MemberRow clicked");
  };

  const [showMemberModal, setShowMemberModal] = useState(false);
  const handleMemberModalClose = () => setShowMemberModal(false);
  const handleMemberModalOpen = () => setShowMemberModal(true);
  const [editMemberModal, setEditMemberModal] = useState(false);

  const subLinks: TabLink[] = [
    {
      url: `/admin/organizations/details/${organizationId}`,
      label: i18n._(/*i18n*/ "Details"),
    },
    {
      url: `/admin/organizations/data-integrations/${organizationId}`,
      label: i18n._(/*i18n*/ "Data integrations"),
    },
    {
      url: `/admin/organizations/sso/${organizationId}`,
      label: i18n._(/*i18n*/ "SSO"),
    },
  ];
  return (
    <AdminLayout>
      <div className="container mt-16px" data-testid="new-organization">
        <Link
          key={`go-back-to-organizations`}
          href={`/admin/organizations`}
          passHref={true}
        >
          <a
            className={combineCSSClasses(
              styles["go-back-link"],
              "text-bold",
              "text-uppercase"
            )}
          >
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.06066 8.93934L2.12128 4.99997L6.06066 1.06056L5 0L0 4.99997L5 10L6.06066 8.93934Z"
                fill="#495057"
              />
            </svg>
            <span className="ml-8px">{i18n._(/*i18n*/ "Organizations")}</span>
          </a>
        </Link>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-16px">
          <p className={combineCSSClasses(styles["title"], "text-primary m-0")}>
            {i18n._(/*i18n*/ "New Organization")}
          </p>
        </div>
      </div>
      <div className="mt-16px" data-testid="organization-tabs">
        <TabLinks
          links={subLinks}
          activeLink={`/admin/organizations/details/${organizationId}`}
        />
      </div>
      <datalist id="regions">
        {US_STATES_AND_CANADIAN_TERRITORIES.map((state: string) => (
          <option value={state} key={`state-${state}`} />
        ))}
      </datalist>
      <div className="container">
        <div className={combineCSSClasses("row", styles["grey-card"])}>
          <div className="d-flex justify-content-between align-items-center mt-16px">
            <div>
              <p className={combineCSSClasses(styles["title"], "m-0")}>
                {i18n._(/*i18n*/ "Subscription Details")}
              </p>
              <p>This organization hasn’t set up their membership yet.</p>
            </div>
            <div>
              <button
                className={combineCSSClasses(
                  "btn btn-primary",
                  styles["my-8px"]
                )}
              >
                <span className="mr-8px">
                  {i18n._(/*i18n*/ "Email Contact")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" data-testid="new-organization-form">
        <div className="row">
          <div className="col-12 text-bold">{i18n._(/*i18n*/ "Details")}</div>
          <div className="col-6">
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Name")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                />
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Type")}
                </label>
              </div>
              <div className="col-9">
                <DropdownList>
                  <option value="police_department">
                    {i18n._(/*i18n*/ "Police Department")}
                  </option>
                  <option value="other">{i18n._(/*i18n*/ "Other")}</option>
                </DropdownList>
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Location")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                />
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Created by")}
                </label>
              </div>
              <div className="col-9">
                <DropdownList>
                  <option value="Test User">Test User</option>
                </DropdownList>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Contact Name")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                />
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Email")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                />
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Phone")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                />
              </div>
            </div>
            <div className="row pt-8px">
              <div className="col-3">
                <label className={styles["input-label"]}>
                  {i18n._(/*i18n*/ "Address")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="text"
                  className={combineCSSClasses(styles["input"])}
                  placeholder={i18n._(/*i18n*/ "Street")}
                />
                <div className="row pt-8px">
                  <div className={combineCSSClasses("col-6", styles["pr-0px"])}>
                    <input
                      type="text"
                      className={combineCSSClasses(styles["input"])}
                      placeholder={i18n._(/*i18n*/ "City")}
                    />
                  </div>
                  <div
                    className={combineCSSClasses(
                      "col-3",
                      styles["pr-0px"],
                      styles["pl-8px"]
                    )}
                  >
                    <input
                      type="text"
                      className={combineCSSClasses(styles["input"])}
                      list="regions"
                    />
                  </div>
                  <div className={combineCSSClasses("col-3", styles["pl-8px"])}>
                    <input
                      type="text"
                      className={combineCSSClasses(styles["input"])}
                      placeholder={i18n._(/*i18n*/ "ZIP/Postal code")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container mt-16px" data-testid="organization-members">
        <div
          className={combineCSSClasses(
            "d-flex justify-content-between",
            styles["my-16px"]
          )}
        >
          <p className="text-bold">{i18n._(/*i18n*/ "Members")}</p>
          <button
            data-testid="add-members"
            className={combineCSSClasses("btn btn-primary", styles["my-8px"])}
            onClick={handleMemberModalOpen}
          >
            <span className="mr-8px">{i18n._(/*i18n*/ "Add Member")}</span>

            <svg
              className={styles.icon}
              width="15"
              height="7"
              viewBox="0 0 10 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93934 0.939346L4.99997 4.87872L1.06056 0.939346L0 2L4.99997 7L10 2L8.93934 0.939346Z"
                fill="#ffffff"
              />
            </svg>
          </button>
          <OrganizationMemberModal
            showModal={showMemberModal}
            handleClose={handleMemberModalClose}
            edit={editMemberModal}
          />
        </div>
        {members.length > 0 ? (
          <div data-testid="org-member-collection">
            <SearchBar
              changeCallback={searchBarCallback}
              submitCallback={searchBarCallback}
              initialTerm={props.searchTerm}
              clickables={props.searchClickables}
              preventFormSubmit={true}
              labels={{
                placeholder: i18n._(/*i18n*/ "Search members"),
                clearSelection: i18n._(/*i18n*/ "Clear selection"),
                clickables: i18n._(/*i18n*/ "Popular tags"),
              }}
            />
            <OrganizationMembersList
              colDefs={membersColDefs}
              rowData={[]}
              handleRowClicked={handleRowClicked}
            />
          </div>
        ) : (
          <p data-testid="org-no-memeber">
            {i18n._(/*i18n*/ "No members have been added yet.")}
          </p>
        )}
      </div>
    </AdminLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: NewOrganizationProps }> => {
  let statusCode = 200;
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      statusCode,
      seo_title: i18n._(/*i18n*/ "Organizations Details"),
      seo_description: "",
      translation,
    },
  };
};

export default NewOrganizationPage;
