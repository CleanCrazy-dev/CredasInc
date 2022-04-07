import { ReactNode, ReactText } from "react";
import Event, { EventProps } from "./Event";
import styles from "./summary.module.scss";

export interface SummaryProps {
  events: EventProps[];
  sectionTitle?: ReactText | ReactNode;
}

const Summary = ({ events, sectionTitle }: SummaryProps) => {
  return (
    <div className={styles.summary__content}>
      {sectionTitle && <p className={styles.summary__title}>{sectionTitle}</p>}
      <div className={styles.summary_events}>
        <div className="row gx-5 gy-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-testid="summary-events"
            >
              <Event {...event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
