import classNames from "classnames";
import React from "react";
import styles from "./text.module.scss";

interface TextProps {
  isCapitalized: boolean;
  children?: React.ReactElement | React.ReactElement[];
  customClass?: string;
  variant?: "subTitle" | "baseText" | "body" | "title" | "paragraph";
}
const Text = (props: TextProps) => {
  const { isCapitalized, children, customClass, variant } = props;
  return (
    <div
      data-testid="text"
      className={classNames(
        styles.label,
        variant && styles[variant],
        isCapitalized && "text-capitalize",
        customClass
      )}
    >
      {children}
    </div>
  );
};

export default Text;
