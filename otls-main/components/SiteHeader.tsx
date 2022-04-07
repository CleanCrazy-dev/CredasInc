import { SiteHeader as CtipSiteHeader } from "@credasinc/ctip-ui";
import { useSession } from "next-auth/react";

export const SiteHeader = () => {
  const { data: session } = useSession();

  return (
    <CtipSiteHeader
      labels={{
        accountSettings: "Account Settings",
        brand: "Brand",
        login: "Login",
        logout: "Logout",
        myAccount: "My Account",
        myProfile: "My Profile",
        signUp: "Sign Up",
        support: "Support",
      }}
      routes={{
        accountSettings: "/account/settings",
        home: "/",
        login: "/auth/login",
        logout: "/auth/logout",
        myProfile: "/account/profile",
        signUp: "/auth/login",
        support: "/support",
      }}
      links={[
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Courses",
          children: [
            {
              section: "Online",
              items: [
                { label: "CTIP Talks", url: "/courses/ctip-talks" },
                { label: "Microlearning", url: "/courses/microlearning" },
                {
                  label: "Online Learning",
                  url: "/courses/online-learning",
                },
                { label: "Youth Skills", url: "/courses/youth-skills" },
              ],
            },
          ],
        },
        {
          label: "Tools",
          url: "/tools",
        },
        {
          label: "Outreach",
          url: "/outreach",
        },
        // {
        //   label: "Resources",
        //   url: "/resources",
        // },
        {
          label: "Organizations",
          url: "/organizations",
        },
        {
          label: "Quick Menu",
          url: "/menu",
        },
      ]}
      isLoggedIn={!!session}
    />
  );
};
