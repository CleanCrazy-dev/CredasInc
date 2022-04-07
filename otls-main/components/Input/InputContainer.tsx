import { ReactNode, ReactText } from "react";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./input.module.scss";

export type InputContainerProps = {
  label?: ReactText | ReactNode;
  labelFor?: string;
  errorMessage?: string;
  note?: string;
  labelPoition?: "side" | "top";
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  containerClassName?: string;
};

const InputContainer = ({
  children,
  label = "",
  labelFor = "",
  labelPoition = "top",
  note = "",
  errorMessage = "",
  icon,
  containerClassName = "",
  noIconUsed = false,
  iconPosition = "end",
  disabled = false,
}: InputContainerProps & {
  children: ReactNode;
  noIconUsed?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div
      className={combineCSSClasses(
        styles.otls_input_container,
        labelPoition === "side" ? "row gx-3" : "",
        containerClassName
      )}
      data-testid="input-container"
    >
      <div
        className={labelPoition === "side" ? "col-sm-4 col-md-3 pt-sm-2" : ""}
      >
        {label && (
          <label
            className={combineCSSClasses(
              "form-label",
              labelPoition === "side" ? "mb-sm-0" : "",
              disabled ? styles.label_disabled : ""
            )}
            htmlFor={labelFor}
          >
            {label}
          </label>
        )}
      </div>
      <div className={labelPoition === "side" ? "col-sm-8 col-md-9" : ""}>
        <div className="input-group flex-nowrap">
          {!noIconUsed && icon && iconPosition === "start" && (
            <InputIcon icon={icon} htmlFor={labelFor} />
          )}
          {children}
          {!noIconUsed && icon && iconPosition === "end" && (
            <InputIcon icon={icon} htmlFor={labelFor} />
          )}
        </div>
        {note && !errorMessage && (
          <div className={styles.input_note}>{note}</div>
        )}
        {errorMessage && (
          <div className="invalid-feedback d-block">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default InputContainer;

const InputIcon = ({
  icon,
  htmlFor = "",
}: {
  icon: ReactNode;
  htmlFor?: string;
}) => (
  <label
    className={combineCSSClasses("input-group-text", styles.otls_input_icon)}
    {...(htmlFor ? { htmlFor } : {})}
  >
    {icon}
  </label>
);
