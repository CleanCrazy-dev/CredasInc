import "reflect-metadata";
import "@/styles/global.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import "@credasinc/ctip-ui/components/design-system.scss";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { initTranslation } from "@/utils/translation";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

initTranslation(i18n); // adds plurals

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale || "en";
  const isFirstRender = useRef(true);

  // run only once on the first render (for server side)
  if (pageProps.translation && isFirstRender.current) {
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
    isFirstRender.current = false;
  }

  // listen for the locale changes
  useEffect(() => {
    if (pageProps.translation) {
      i18n.load(locale, pageProps.translation);
      i18n.activate(locale);
    }
  }, [locale, pageProps.translation]);

  return (
    <I18nProvider i18n={i18n}>
      <SessionProvider session={session}>
        <SiteHeader />
        <Component {...pageProps} />
        <SiteFooter />
      </SessionProvider>

      {/*
        Imports every Bootstrap JavaScript plugin and dependency.
        https://getbootstrap.com/docs/5.1/getting-started/introduction/#bundle
      */}

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>
    </I18nProvider>
  );
}
