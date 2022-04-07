import classNames from "classnames";
import React, { useState } from "react";
import styles from "./form.module.scss";

interface SwitchProps {
  name: string;
  checked: boolean;
  onChange?: (obj: React.ChangeEvent<HTMLInputElement>) => void;
}
const Switch = (props: SwitchProps) => {
  const { name, checked, onChange } = props;
  const [switchValue, setSwitchValue] = useState<boolean>(checked);
  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
    setSwitchValue(!switchValue);
  };
  return (
    <label className={styles.switch}>
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={handleChange}
        checked={switchValue}
        data-testid="switch-input"
      />
      <span
        data-testid="switch-slider"
        className={classNames(styles.slider)}
      ></span>
    </label>
  );
};

export default Switch;
