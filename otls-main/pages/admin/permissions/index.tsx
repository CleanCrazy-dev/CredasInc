import { SearchBar, SearchBarOption, SearchBarProps } from "@credasinc/ctip-ui";
import { GetStaticProps, NextPage } from "next";
import { SEOProps } from "../../../constants";
import { i18n, Messages } from "@lingui/core";
import AdminLayout from "../../../components/admin-layout";
import Checkbox from "@/components/Checkbox";
import PermissionList from "@/components/permission-list";
import { useState } from "react";
import PermissionModal from "@/components/permission-modal";
import { loadTranslation } from "@/utils/translation";

interface PermissionsProps extends SEOProps {
  statusCode: number;
  translation: Messages;
}

const CheckBox = ({ value }: any) => {
  return <Checkbox checked={value} />;
};

const PermissionsPage: NextPage<any> = (props) => {
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
      headerName: i18n._(/*i18n*/ "Role"),
      field: "name",
    },
    {
      headerName: i18n._(/*i18n*/ "Control"),
      field: "control",
      cellRenderer: CheckBox,
    },
    {
      headerName: i18n._(/*i18n*/ "Control"),
      field: "control_1",
      cellRenderer: CheckBox,
    },
    {
      headerName: i18n._(/*i18n*/ "Control"),
      field: "control_2",
      cellRenderer: CheckBox,
    },
    {
      headerName: i18n._(/*i18n*/ "Control"),
      field: "control_3",
      cellRenderer: CheckBox,
    },
    {
      headerName: i18n._(/*i18n*/ "Control"),
      field: "control_4",
      cellRenderer: CheckBox,
    },
  ];

  const dumbData = [
    {
      name: "Admin",
      control: true,
      control_1: true,
      control_2: true,
      control_3: true,
      control_4: true,
    },
    {
      name: "Member",
      control: true,
      control_1: true,
      control_2: true,
      control_3: false,
      control_4: false,
    },
    {
      name: "Guest",
      control: true,
      control_1: false,
      control_2: false,
      control_3: false,
      control_4: false,
    },
  ];

  const [showPermissionModal, setShowNewPermissionModal] = useState(false);
  const handlePermissionModalClose = () => setShowNewPermissionModal(false);
  const handlePermissionModalOpen = () => setShowNewPermissionModal(true);

  return (
    <AdminLayout>
      <div className="container">
        <div className="d-flex justify-content-between mt-16px mb-16px">
          <p className="page__title" data-testid="permission">
            {i18n._(/*i18n*/ "Permissions")}
          </p>
          <button
            className="btn btn-primary my-8px"
            data-testid="add-permission"
            onClick={handlePermissionModalOpen}
          >
            <span className="mr-8px">
              {i18n._(/*i18n*/ "Add Permission Level")}
            </span>
          </button>
          <PermissionModal
            handleClose={handlePermissionModalClose}
            showModal={showPermissionModal}
          />
        </div>
        <SearchBar
          changeCallback={searchBarCallback}
          submitCallback={searchBarCallback}
          initialTerm={props.searchTerm}
          clickables={props.searchClickables}
          preventFormSubmit={true}
          labels={{
            placeholder: i18n._(/*i18n*/ "Search permissions"),
            clearSelection: i18n._(/*i18n*/ "Clear selection"),
            clickables: i18n._(/*i18n*/ "Popular tags"),
          }}
        />
      </div>
      <div className="container mt-24px">
        <PermissionList colDefs={colDefs} rowData={dumbData} />
      </div>
    </AdminLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: PermissionsProps }> => {
  let statusCode = 200;
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      statusCode,
      seo_title: i18n._(/*i18n*/ "Permissions"),
      seo_description: "",
      translation,
    },
  };
};

export default PermissionsPage;
