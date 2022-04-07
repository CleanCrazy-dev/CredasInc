import { LoadingWidget } from "@credasinc/ctip-ui";
import { GetStaticProps } from "next";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";

// Signs out on the client side *only*, via next-auth's signOut
// This is the place where Auth0 redirects after signing out on the server side.
export default function SignoutPage() {
  useEffect(() => {
    setTimeout(() => {
      signOut({ callbackUrl: window.location.origin });
    }, 500);
  }, []);

  return (
    <LoadingWidget
      labels={{
        loading: i18n._(/*i18n*/ "Please wait while we sign you out!"),
      }}
    />
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
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
