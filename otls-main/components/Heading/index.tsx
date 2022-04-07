import classNames from "classnames";
import React from "react";
import styles from "./header.module.scss";

interface HeadingProps {
  variant: "title" | "subTitle" | "baseText";
  customClass?: string;
  children?: React.ReactElement | React.ReactElement[];
}
const Heading = (props: HeadingProps) => {
  const { variant, children, customClass } = props;
  return (
    <div
      data-testid="heading"
      className={classNames(styles[variant], customClass)}
    >
      {children}
    </div>
  );
};

export default Heading;
