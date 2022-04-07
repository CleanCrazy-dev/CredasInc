import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import InputContainer, { InputContainerProps } from "./InputContainer";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./input.module.scss";

type InputFieldTypes =
  | "text"
  | "number"
  | "date"
  | "time"
  | "password"
  | "textarea";

export type InputFieldProps = {
  type: InputFieldTypes;
  htmlProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >;
};

const InputFieldTypeWrapper = ({ type, htmlProps }: InputFieldProps) => {
  if (type === "textarea")
    return <textarea {...htmlProps} data-testid="textarea" />;
  else return <input type={type} {...htmlProps} data-testid="input-only" />;
};

export const InputField = ({
  type,
  icon,
  iconPosition,
  label,
  labelFor,
  errorMessage,
  note,
  labelPoition,
  htmlProps,
  containerClassName,
}: InputFieldProps & InputContainerProps) => {
  return (
    <InputContainer
      {...{
        label,
        labelFor,
        errorMessage,
        note,
        labelPoition,
        icon,
        iconPosition,
        containerClassName,
        disabled: htmlProps?.disabled,
      }}
    >
      <InputFieldTypeWrapper
        type={type}
        htmlProps={{
          ...htmlProps,
          ...(labelFor ? { id: labelFor } : {}),
          className: combineCSSClasses(
            "form-control",
            styles.otls_input,
            errorMessage ? "is-invalid" : "",
            htmlProps?.className || null
          ),
        }}
      />
    </InputContainer>
  );
};
