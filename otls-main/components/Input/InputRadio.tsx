import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import InputContainer, { InputContainerProps } from "./InputContainer";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./input.module.scss";

export type InputRadioOptionType = {
  value: string;
  label?: string;
  defaultChecked?: boolean;
};

export interface InputRadioProps extends InputContainerProps {
  options: InputRadioOptionType[];
  inputName: string;
  htmlProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const InputRadio = ({
  icon,
  iconPosition,
  label,
  labelFor,
  errorMessage,
  note,
  labelPoition,
  options,
  containerClassName,
  inputName,
  htmlProps,
}: InputRadioProps) => {
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
      }}
    >
      <div className="flex gap-8">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              {...htmlProps}
              value={option.value}
              defaultChecked={option.defaultChecked || false}
              type="radio"
              name={inputName}
              className={combineCSSClasses(
                styles.input_radio,
                "transition-all",
                htmlProps?.className!
              )}
            />
            {option.label && (
              <span className="ml-1 text-base-sm">{option.label}</span>
            )}
          </label>
        ))}
      </div>
    </InputContainer>
  );
};
