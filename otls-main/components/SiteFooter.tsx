import { SiteFooter as CtipSiteFooter } from "@credasinc/ctip-ui";

export const SiteFooter = () => {
  return (
    <CtipSiteFooter
      labels={{
        aboutUs: "About Us",
        allRightsReserved: "All Rights Reserved",
        america: "America",
        canada: "Canada",
        contact: "Contact",
        copyright: "Copyright",
        ctipLong: "Center for Trauma Informed Practices",
        facebookLink: "CTIP on Facebook",
        faq: "FAQ",
        language: "Language",
        languagePicker: "Select a language",
        locations: "Locations",
        login: "Log In",
        members: "Members",
        signUp: "Sign Up",
        support: "Support",
        testimonials: "Testimonials",
        tollFree: "Toll-free",
        twitterLink: "CTIP on Twitter",
      }}
      routes={{
        // faq: "/faqs",
        login: "/",
        signUp: "/",
        support: "/",
      }}
    />
  );
};
