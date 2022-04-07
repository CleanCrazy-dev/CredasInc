import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import InputContainer, { InputContainerProps } from "./InputContainer";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./input.module.scss";

export interface InputSelectOptionProps {
  title: string;
  htmlProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLOptionElement>,
    HTMLOptionElement
  >;
}

export interface InputSelectProps extends InputContainerProps {
  options: InputSelectOptionProps[];
  htmlProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >;
}

export const InputSelect = ({
  icon,
  iconPosition,
  label,
  labelFor,
  errorMessage,
  note,
  labelPoition,
  htmlProps,
  options,
  containerClassName,
}: InputSelectProps) => {
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
      <select
        {...htmlProps}
        {...(labelFor ? { id: labelFor } : {})}
        className={combineCSSClasses(
          "form-select",
          styles.otls_input,
          errorMessage ? "is-invalid" : "",
          htmlProps?.className || null
        )}
        data-testid="select"
      >
        {options.map((option, index) => (
          <option
            key={(option?.htmlProps?.value as string | number) || index}
            {...(option.htmlProps ? option.htmlProps : {})}
          >
            {option.title}
          </option>
        ))}
      </select>
    </InputContainer>
  );
};
