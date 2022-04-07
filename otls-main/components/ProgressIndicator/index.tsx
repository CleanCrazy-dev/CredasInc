import classNames from "classnames";
import React from "react";
import styles from "./progress.module.scss";

interface ProgressIndicatorProps {
  value: number;
  min?: number;
  max?: number;
}

const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { value, min = 0, max = 100 } = props;

  return (
    <div
      data-testid="progress-indicator"
      className={classNames("progress", styles.progress)}
    >
      <div
        className={classNames("progress-bar", styles.progressBar)}
        role="progressbar"
        aria-valuenow={value}
        style={{
          width: `${value}%`,
        }}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ProgressIndicator;
