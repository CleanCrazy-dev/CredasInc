import { i18n } from "@lingui/core";
import { useRouter } from "next/router";
import TabLinks, { TabLink } from "../Tab-Links";

const AdminNavBar = () => {
  const router = useRouter();
  const navItems = [
    {
      value: "ORGANIZATIONS",
      title: "ORGANIZATIONS",
    },
    {
      value: "PERMISSIONS",
      title: "PERMISSIONS",
    },
    {
      value: "EVENTS",
      title: "EVENTS",
    },
    {
      value: "ASK_CTIP",
      title: "ASK_CTIP",
    },
    {
      value: "TRAINERS",
      title: "TRAINERS",
    },
    {
      value: "PARTNERS",
      title: "PARTNERS",
    },
    {
      value: "COURSES",
      title: "COURSES",
    },
    {
      value: "RESOURSES",
      title: "RESOURSES",
    },
    {
      value: "PROTOCOLS",
      title: "PROTOCOLS",
    },
  ];

  const translatedNavItemNames: { [key: string]: string } = {
    ORGANIZATIONS: i18n._(/*i18n*/ "Organizations"),
    PERMISSIONS: i18n._(/*i18n*/ "Permissions"),
    EVENTS: i18n._(/*i18n*/ "Events"),
    ASK_CTIP: i18n._(/*i18n*/ "Ask CTIP"),
    TRAINERS: i18n._(/*i18n*/ "Trainers"),
    PARTNERS: i18n._(/*i18n*/ "Partners"),
    COURSES: i18n._(/*i18n*/ "Courses"),
    RESOURSES: i18n._(/*i18n*/ "Resourses"),
    PROTOCOLS: i18n._(/*i18n*/ "Protocols"),
  };

  const translatedLinks: TabLink[] = navItems.map((navItem) => ({
    url: `/admin/${navItem.value.toLocaleLowerCase()}`,
    label: (translatedNavItemNames[navItem.value] || navItem.title) as string,
  }));

  const currentNavItem =
    translatedLinks
      .find((link) => router?.asPath.includes(link.url.toLocaleLowerCase()))
      ?.url.toLocaleLowerCase() || "";
  return (
    <div className="mt-24px" data-testid="admin-nav">
      <TabLinks activeLink={currentNavItem} links={translatedLinks} />
    </div>
  );
};

export default AdminNavBar;
