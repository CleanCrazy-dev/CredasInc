import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import { useState } from "react";
import styles from "./checkbox.module.scss";

const Checkbox = ({ className, checked, onValueChange, ...props }: any) => {
  const [isChecked, setChecked] = useState(checked);
  const handleChange = (event: any) => {
    if (onValueChange) {
      onValueChange(!isChecked);
    }
    setChecked(!isChecked);
  };
  return (
    <div className={combineCSSClasses(styles["checkbox-container"], className)}>
      <input
        type="checkbox"
        {...props}
        className={styles["hidden-input"]}
        onChange={handleChange}
        data-testid="checkbox-simple"
      />
      <div
        className={combineCSSClasses(
          styles["custom-input"],
          isChecked ? styles["checked"] : ""
        )}
        data-testid="checkbox-custom-svg"
      >
        <svg viewBox="0 0 24 24" className={styles["icon"]}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  );
};

export default Checkbox;
