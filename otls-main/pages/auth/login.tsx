import { LoadingWidget } from "@credasinc/ctip-ui";
import { GetStaticProps } from "next";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { loadTranslation } from "@/utils/translation";

export default function SignoutPage() {
  useEffect(() => {
    signIn("auth0");
  }, []);

  return <LoadingWidget labels={{ loading: "" }} />;
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
