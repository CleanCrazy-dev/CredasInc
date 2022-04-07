import React, { useState } from "react";
import { boolean } from "yup";
interface CheckboxProps {
  checked: boolean;
  onValueChange?: any;
}
const Checkbox = (props: CheckboxProps) => {
  const { checked, onValueChange } = props;
  const [isChecked, setChecked] = useState<boolean>(checked);
  const handleChange = (event: any) => {
    if (onValueChange) {
      onValueChange(!isChecked);
    }
    setChecked(!isChecked);
  };
  return (
    <div className="form-group flex-grow-1">
      <input
        className="form-check-input"
        type="checkbox"
        {...props}
        checked={checked || false}
        onChange={handleChange}
        id="flexCheckDefault"
        data-testid="checkbox-form"
      />
    </div>
  );
};

export default Checkbox;
