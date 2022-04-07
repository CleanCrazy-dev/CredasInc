import { GetStaticProps, NextPage } from "next";
import { i18n, Messages } from "@lingui/core";
import Link from "next/link";

import { loadTranslation } from "../../utils/translation";
import { SEOProps } from "../../constant";

interface AccountPageProp extends SEOProps {
  translation: Messages;
}

const menus = [
  {
    link: "/admin/courses",
    label: i18n._(/*i18n*/ "Admin Courses"),
  },
  {
    link: "/admin/organizations",
    label: i18n._(/*i18n*/ "Admin Organizations"),
  },
  {
    link: "/admin/trainers",
    label: i18n._(/*i18n*/ "Admin Trainers"),
  },
  {
    link: "/admin/permissions",
    label: i18n._(/*i18n*/ "Admin Permissions"),
  },
];

const Menu = () => {
  return (
    <div className="flex flex-col container gap-8">
      <div className="heading">
        <h3 className="font-bold text-xl">
          {i18n._(/*i18n*/ "Admin Quick Menu")}
        </h3>
      </div>
      <div className="flex flex-col gap-8">
        {menus.map((menu, index) => (
          <div key={index}>
            <Link href={menu.link} passHref={true}>
              <a className="text-lg no-underline">{menu.label}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (
  ctx
): Promise<{ props: AccountPageProp }> => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === "production"
  );
  return {
    props: {
      translation,
    },
  };
};

export default Menu;
