import React from "react";
import NextLink from "next/link";
import styles from "./link.module.scss";

interface LinkProps {
  href: string;
  content: React.ReactElement;
}

const Link = (props: LinkProps) => {
  const { href, content } = props;
  return (
    <NextLink href={href} passHref={true}>
      <a className={styles.link} data-testid="link">
        {content}
      </a>
    </NextLink>
  );
};

export default Link;
