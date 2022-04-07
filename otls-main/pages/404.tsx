import { GetStaticProps } from "next";
import React from "react";
import { loadTranslation } from "@/utils/translation";
import { i18n } from "@lingui/core";

const Custom404 = () => {
  return (
    <h1 className="text-center">{i18n._(/*i18n*/ "404 - Page Not Found")}</h1>
  );
};

export default Custom404;

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
