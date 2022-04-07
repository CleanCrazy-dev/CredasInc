import { useCallback, useEffect, useState } from "react";
import InputContainer, { InputContainerProps } from "./InputContainer";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./input.module.scss";
import Badge from "../Badge/Badge";
import { OtlsClose } from "../Icons";

type ValidationType = "none" | "email";

export interface InputChipsProps {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?(values: string[]): void;
  validateInput?: ValidationType;
}

type ValueState = { id: number | string; value: string };

export const InputChips = ({
  icon,
  iconPosition,
  label,
  labelFor,
  errorMessage,
  note,
  labelPoition,
  containerClassName,
  defaultValue = "",
  disabled = false,
  placeholder = "",
  onChange,
  validateInput = "none",
}: InputChipsProps & InputContainerProps) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  // save input value and comma separated values as array
  const [enteredValues, setEnteredValues] = useState<{
    inputValue: string;
    values: ValueState[];
  }>({
    inputValue: "",
    values: [],
  });

  // populate default values
  useEffect(() => {
    let values: ValueState[] = [];
    if (defaultValue)
      values = defaultValue
        .trim()
        .split(",")
        .map((el, index) => ({ id: Date.now() + index, value: el.trim() }));
    setEnteredValues({ values, inputValue: "" });
  }, [defaultValue]);

  // handle typed values
  const onTypeTextHandler = useCallback((e) => {
    setEnteredValues((current) => ({ ...current, inputValue: e.target.value }));
  }, []);

  // handle deleting values
  const onDeleteValueHandler = useCallback(
    (id: string | number) => {
      const updatedValues = enteredValues.values.filter((el) => el.id !== id);
      setEnteredValues((current) => ({
        ...current,
        values: updatedValues,
      }));

      // send values to onChange handler from props
      if (onChange) onChange([...updatedValues].map((el) => el.value));
    },
    [enteredValues, onChange]
  );

  // add value once comma key is pressed
  const onHandleKeyDownHandler = useCallback(
    (e) => {
      if ([","].includes(e.key)) {
        e.preventDefault();

        const inputValue = enteredValues.inputValue.trim();
        let formattedValues: ValueState[] = [];

        // check if multiple values pasted
        if (inputValue) {
          if (inputValue.includes(",")) {
            formattedValues = inputValue.split(",").map((el, index) => ({
              id: Date.now() + index,
              value: el.trim(),
            }));
          } else {
            formattedValues = [{ id: Date.now(), value: inputValue }];
          }
        }

        // add only non repeated values
        // apply validation if required
        formattedValues = formattedValues.filter(
          (el) =>
            validateInputHandler(el.value, validateInput) &&
            enteredValues.values.findIndex((cur) => cur.value === el.value) ===
              -1
        );

        if (formattedValues.length) {
          setEnteredValues((current) => ({
            values: [...current.values, ...formattedValues],
            inputValue: "",
          }));

          // send values to onChange handler from props
          if (onChange)
            onChange(
              [...enteredValues.values, ...formattedValues].map(
                (el) => el.value
              )
            );
        }
      }
    },
    [enteredValues, onChange, validateInput]
  );

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
        disabled: disabled,
      }}
    >
      <div
        className={combineCSSClasses(
          "form-control",
          styles.otls_input,
          errorMessage ? "is-invalid" : "",
          styles.input_chips__container,
          isInputFocused ? styles["input_chips__container--focus"] : "",
          isInputFocused && errorMessage
            ? styles["input_chips__container--focus-error"]
            : ""
        )}
      >
        {enteredValues.values.map(({ id, value }) => (
          <div
            key={id}
            className={styles.input_chips__value}
            data-testid="input-chips-badge"
          >
            <Badge
              type="secondary"
              label={
                <>
                  {value}
                  <span
                    className={styles.input_chips__value_delete}
                    onClick={() => onDeleteValueHandler(id)}
                  >
                    <OtlsClose />
                  </span>
                </>
              }
            />
          </div>
        ))}
        <input
          type="text"
          onChange={onTypeTextHandler}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onKeyDown={onHandleKeyDownHandler}
          value={enteredValues.inputValue}
          placeholder={placeholder}
          {...(labelFor ? { id: labelFor } : {})}
          data-testid="input-chips"
        />
      </div>
    </InputContainer>
  );
};

const isEmail = (email: string) => {
  return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
};

const validateInputHandler = (value: string, validation: ValidationType) => {
  switch (validation) {
    case "email":
      return isEmail(value);
      break;
    default:
      return true;
  }
};
