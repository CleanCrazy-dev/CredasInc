import { LoadingWidget } from "@credasinc/ctip-ui";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";

// Send client to the Auth0 sign-out endpoint, then have Auth0 return the
// client to our signout page to delete our session.
function handleSignOut() {
  const returnTo = `${window.location.origin}/auth/signout`;
  const logoutUrl = `${
    process.env.NEXT_PUBLIC_AUTH0_ISSUER
  }/v2/logout?client_id=${
    process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID
  }&returnTo=${encodeURIComponent(returnTo)}`;
  window.location.href = logoutUrl;
}

export default function SignoutPage() {
  useEffect(() => {
    handleSignOut();
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
