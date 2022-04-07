import { ReactNode, ReactText } from "react";
import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import styles from "./badge.module.scss";

interface BadgeProps {
  label: ReactText | ReactNode;
  type: "primary" | "secondary";
  badgeClassName?: string;
}

const Badge = ({ label, type, badgeClassName = "" }: BadgeProps) => {
  let styleClassName = "otls_badge--secondary";
  switch (type) {
    case "primary":
      styleClassName = "otls_badge--primary";
      break;
    default:
      styleClassName = styleClassName;
  }

  return (
    <span
      className={combineCSSClasses(
        styles.otls_badge,
        styles[styleClassName],
        badgeClassName
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
