import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import React from "react";
import styles from "./badge.module.scss";

export type BagdeVariantType = "success" | "error" | "warning" | "info";
interface BagdeProps {
  content: React.ReactElement;
  variant: BagdeVariantType;
}
const Badge = (props: BagdeProps) => {
  const { content, variant } = props;
  return (
    <div className={combineCSSClasses(styles.badge, styles[variant])}>
      <div>{content}</div>
    </div>
  );
};

export default Badge;
