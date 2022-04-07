import { ReactNode, ReactText } from "react";
import styles from "./summary.module.scss";

export interface EventProps {
  name: string;
  nameSize?: "default" | "large";
  value: string;
  text?: ReactNode | ReactText;
}

const Event = ({ name, nameSize = "default", value, text }: EventProps) => {
  return (
    <div className={styles.event}>
      <span className={nameSize === "large" ? styles["event__name--lg"] : ""}>
        {name}
      </span>
      <p>{value}</p>
      {text && <span className={styles.event__text}>{text}</span>}
    </div>
  );
};

export default Event;
