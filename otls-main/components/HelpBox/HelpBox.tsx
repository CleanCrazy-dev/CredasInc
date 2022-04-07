import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import styles from "./helpBox.module.scss";

export interface HelpBoxProps {
  title: string | ReactNode;
  description: string | ReactNode;
  linkLabel: string | ReactNode;
  linkUrl: string;
  styling?: CSSProperties;
}

const HelpBox = ({
  title,
  description,
  linkLabel,
  linkUrl,
  styling,
}: HelpBoxProps) => {
  return (
    <div
      className={styles.help_box}
      style={styling || {}}
      data-testid="helpbox"
    >
      <div>
        <p className={styles.help_box__title}>{title}</p>
        <p className={styles.help_box__description}>{description}</p>
      </div>
      <Link href={linkUrl} passHref={true}>
        <a className="btn btn-primary" data-testid="link">
          {linkLabel}
        </a>
      </Link>
    </div>
  );
};

export default HelpBox;
