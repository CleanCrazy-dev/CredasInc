import { combineCSSClasses } from "@credasinc/ctip-ui/utils/html";
import Link from "next/link";
import styles from "./tablink.module.scss";

export interface TabLink {
  url: string;
  label: string;
}

export interface TabLinkProps {
  links: TabLink[];
  activeLink: string;
}

const TabLinks = ({ links, activeLink }: TabLinkProps) => {
  return (
    <div
      className={combineCSSClasses("container", styles._)}
      data-testid="tablinks"
    >
      <nav className={styles.tabs}>
        {links.map(({ url, label }) => {
          return (
            <Link key={`admin-tabs-${label}`} href={url} passHref={true}>
              <a
                role={`tab-${label}`}
                className={combineCSSClasses(
                  styles.tab,
                  url === activeLink?.toLowerCase()
                    ? styles["tab--active"]
                    : null
                )}
              >
                {label}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default TabLinks;
