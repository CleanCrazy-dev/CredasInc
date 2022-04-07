import { ReactNode, ReactText } from "react";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { i18n } from "@lingui/core";
import styles from "./modal.module.scss";
import Portal from "../Portal/Portal";

export interface ModalProps {
  id: string;
  title: ReactText | ReactNode;
  children: ReactNode;
  showCloseIcon?: boolean;
  footer?: ReactNode;
  footerClassName?: string;
  showFooterBorder?: boolean;
}

const Modal = ({
  id,
  title,
  children,
  showCloseIcon = false,
  footer,
  showFooterBorder = false,
  footerClassName = "",
}: ModalProps) => {
  return (
    <Portal>
      <div
        className="modal fade"
        id={id}
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
        data-testid="modal"
      >
        <div
          className={
            "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-md-down"
          }
        >
          <div
            className={combineCSSClasses(
              "modal-content",
              styles.modal__content
            )}
          >
            <div
              className={combineCSSClasses(
                "modal-header",
                styles.modal__header
              )}
            >
              <p
                className={combineCSSClasses(
                  "modal-title",
                  styles.modal__title
                )}
                id={`${id}Label`}
              >
                {title}
              </p>
              {showCloseIcon && (
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label={i18n._(/*i18n*/ "Close")}
                ></button>
              )}{" "}
            </div>
            <div
              className={combineCSSClasses("modal-body", styles.modal__body)}
            >
              {children}
            </div>
            {footer && (
              <div
                className={combineCSSClasses(
                  "modal-footer",
                  styles.modal__footer,
                  showFooterBorder ? "" : styles["modal__foter--no-border"],
                  footerClassName
                )}
              >
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
