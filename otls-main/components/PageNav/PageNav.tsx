import ActiveLink from "./ActiveNavLink";
import styles from "./pageNav.module.scss";

export interface PageNavLink {
  label: string;
  url: string;
}

const PageNav = ({ links }: { links: PageNavLink[] }) => {
  return (
    <nav className={styles.page_nav} data-testid="page-link">
      {links.map((link, index) => (
        <li
          key={index}
          className={styles.page_nav__nav_item}
          data-testid="list-link"
        >
          <ActiveLink
            href={link.url}
            activeClassName={styles["page_nav__nav_link--active"]}
            passHref={true}
          >
            <a data-testid="list-link" className={styles.page_nav__nav_link}>
              {link.label}
            </a>
          </ActiveLink>
        </li>
      ))}
    </nav>
  );
};

export default PageNav;
