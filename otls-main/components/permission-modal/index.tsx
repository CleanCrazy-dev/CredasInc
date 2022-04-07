import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { Modal } from "react-bootstrap";
import style from "../organization-modal/organization-modal.module.scss";
import { i18n } from "@lingui/core";

interface PermissionModalProps {
  showModal: boolean;
  handleClose: () => any;
}

const PermissionModal = ({ showModal, handleClose }: PermissionModalProps) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName={combineCSSClasses(
        "rounded-modal no-close-btn",
        style["modal-container"]
      )}
      centered
      data-testid="permission-show-modal"
    >
      <Modal.Header closeButton className={style["modal-header"]}>
        <div className={combineCSSClasses(style["full-width"])}>
          <Modal.Title
            className={combineCSSClasses(
              "text-primary mt-3 mb-1",
              style["modal-title"]
            )}
          >
            {i18n._(/*i18n*/ "New Member Role")}
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body className={combineCSSClasses("pt-0", style["modal-body"])}>
        <div className="row">
          <div className="col-3">
            <label className={style["input-label"]}>
              {i18n._(/*i18n*/ "Role Name")}
            </label>
          </div>
          <div className="col-9">
            <input type="text" className={combineCSSClasses(style["input"])} />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={style["modal-footer"]}>
        <div
          className={combineCSSClasses(
            `d-flex justify-content-end w-100`,
            style["mt-16px"],
            style["mb-24px"]
          )}
        >
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
          <button className="btn btn-primary">{i18n._(/*i18n*/ "Save")}</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default PermissionModal;
