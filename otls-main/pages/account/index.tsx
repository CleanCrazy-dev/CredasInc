import { GetStaticProps, NextPage } from "next";
import { i18n, Messages } from "@lingui/core";

import Tabs, { TabType } from "@/components/Tabs";
import AccountView from "modules/account/views/AccountView";
import CourseView from "modules/account/views/CourseView";
import Subscription from "modules/account/views/Subscription";
import SettingView from "modules/account/views/SettingView";

import { loadTranslation } from "../../utils/translation";
import { SEOProps } from "../../constant";

interface AccountPageProp extends SEOProps {
  translation: Messages;
}

const Account = () => {
  const tabs: TabType[] = [
    {
      id: 1,
      title: i18n._(/*i18n*/ "account"),
      component: <AccountView i18n={i18n} />,
    },
    {
      id: 2,
      title: i18n._(/*i18n*/ "courses"),
      component: <CourseView i18n={i18n} />,
    },
    {
      id: 3,
      title: i18n._(/*i18n*/ "payment info"),
      component: <Subscription i18n={i18n} />,
    },
    {
      id: 4,
      title: i18n._(/*i18n*/ "settings"),
      component: <SettingView i18n={i18n} />,
    },
  ];
  return (
    <div className="container">
      <Tabs tabs={tabs} />
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

export default Account;
