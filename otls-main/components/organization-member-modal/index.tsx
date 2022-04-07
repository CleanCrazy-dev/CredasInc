import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { US_STATES_AND_CANADIAN_TERRITORIES } from "../../constants";
import { Modal } from "react-bootstrap";
import UserAvatar from "../Avatar";
import DropdownList from "../Dropdown-list";
import UploadButton from "../Upload-button";
import style from "../organization-modal/organization-modal.module.scss";
import { i18n } from "@lingui/core";

interface OrganizationMemberModalProps {
  showModal: boolean;
  handleClose: () => any;
  edit: boolean;
  member?: any;
}

const OrganizationMemberModal = ({
  showModal,
  handleClose,
  edit,
  member,
}: OrganizationMemberModalProps) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName={combineCSSClasses(
        "rounded-modal no-close-btn",
        style["modal-container"]
      )}
      data-testid="modal"
    >
      <Modal.Header closeButton className={style["modal-header"]}>
        <div
          className={combineCSSClasses(style["full-width"])}
          data-testid="add-members-modal"
        >
          <Modal.Title
            className={combineCSSClasses(
              "text-primary mt-3 mb-1",
              style["modal-title"]
            )}
          >
            {edit ? member?.name : i18n._(/*i18n*/ "New Member")}
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body className={combineCSSClasses("pt-0", style["modal-body"])}>
        <datalist id="regions" data-testid="regions">
          {US_STATES_AND_CANADIAN_TERRITORIES.map((state: string) => (
            <option value={state} key={`state-${state}`} />
          ))}
        </datalist>
        <div className="row">
          <div className="col-3">
            <UserAvatar src={member?.picture || ""} rounded={true} />
          </div>
          <div className="col-9 m-auto">
            <UploadButton
              color="none"
              data-testid="upload-button"
              className={combineCSSClasses(style["grey-btn"])}
            >
              {i18n._(/*i18n*/ "UPLOAD PHOTO")}
            </UploadButton>
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-24px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Name")}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className={combineCSSClasses(style["input"])}
              defaultValue={member?.name}
            />
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Organization")}
            </label>
          </div>
          <div className="col-9">
            <DropdownList
              defaultValue={member?.organization}
              data-testid="dropdown-list"
            >
              <option value={"Brooklyn PD"}>Brooklyn PD</option>
              <option value="other">{i18n._(/*i18n*/ "Other")}</option>
            </DropdownList>
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Role")}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className={combineCSSClasses(style["input"])}
              defaultValue={member?.role}
            />
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Org Access")}
            </label>
          </div>
          <div className="col-9">
            <DropdownList defaultValue={member?.org_access}>
              <option value={"Admin"}>{i18n._(/*i18n*/ "Admin")}</option>
              <option value="other">{i18n._(/*i18n*/ "Other")}</option>
            </DropdownList>
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Email")}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className={combineCSSClasses(style["input"])}
              defaultValue={member?.email}
            />
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Phone")}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className={combineCSSClasses(style["input"])}
              defaultValue={member?.phone}
            />
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Address")}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className={combineCSSClasses(style["input"])}
              placeholder={i18n._(/*i18n*/ "Street")}
              defaultValue={member?.address?.street}
            />
            <div className={combineCSSClasses("row", style["mt-8px"])}>
              <div className={combineCSSClasses("col-6", style["pr-0px"])}>
                <input
                  type="text"
                  className={combineCSSClasses(style["input"])}
                  placeholder={i18n._(/*i18n*/ "City")}
                  defaultValue={member?.address?.city}
                />
              </div>
              <div
                className={combineCSSClasses(
                  "col-3",
                  style["pr-0px"],
                  style["pl-8px"]
                )}
              >
                <input
                  type="text"
                  className={combineCSSClasses(style["input"])}
                  list="regions"
                  defaultValue={member?.address?.region}
                />
              </div>
              <div className={combineCSSClasses("col-3", style["pl-8px"])}>
                <input
                  type="text"
                  className={combineCSSClasses(style["input"])}
                  placeholder={i18n._(/*i18n*/ "ZIP/Postal code")}
                  defaultValue={member?.address?.zip}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={combineCSSClasses("row", style["mt-8px"])}>
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "VTRA Trained")}
            </label>
          </div>
          <div className="col-9">
            <DropdownList defaultValue={member?.vtra_trained}>
              <option value="Yes">{i18n._(/*i18n*/ "Yes")}</option>
              <option value="No">{i18n._(/*i18n*/ "No")}</option>
            </DropdownList>
          </div>
        </div>
        {edit ? (
          <>
            <div className={combineCSSClasses("row", style["mt-8px"])}>
              <div className="col-3">
                <label className={style["input-label"]}>
                  {i18n._(/*i18n*/ "Completed on")}
                </label>
              </div>
              <div className="col-9">
                <input
                  type="date"
                  className={combineCSSClasses(style["input"])}
                  defaultValue={member?.completed_on}
                />
              </div>
            </div>
          </>
        ) : (
          <p className={combineCSSClasses(style["text-grey"], "mt-16px")}>
            {i18n._(
              /*i18n*/ "A $100 member fee will be added to your bill next month."
            )}
          </p>
        )}
      </Modal.Body>
      <Modal.Footer className={style["modal-footer"]}>
        <div
          className={combineCSSClasses(
            `d-flex justify-content-between w-100`,
            style["mt-16px"],
            style["mb-24px"]
          )}
        >
          <div>
            {edit ? (
              <>
                <button className={combineCSSClasses("btn", style["mr-8px"])}>
                  {i18n._(/*i18n*/ "DELETE")}
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          <div>
            <button
              className={combineCSSClasses(
                "btn",
                style["grey-btn"],
                style["mr-8px"]
              )}
              onClick={handleClose}
            >
              {i18n._(/*i18n*/ "Cancel")}
            </button>
            <button className="btn btn-primary" onClick={handleClose}>
              {i18n._(/*i18n*/ "Save & Invite")}
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default OrganizationMemberModal;
