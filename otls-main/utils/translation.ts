import type { I18n } from "@lingui/core";
import { en, es, fr } from "make-plural/plurals";
import { GetStaticPropsContext } from "next";

export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    en: { plurals: en },
    es: { plurals: es },
    fr: { plurals: fr },
    pseudo: { plurals: en },
  });
}

export async function loadTranslation(locale: string, isProduction = true) {
  let data;
  if (isProduction) {
    data = await import(`../locales/${locale}/messages`);
  } else {
    data = await import(`@lingui/loader!../locales/${locale}/messages.po`);
  }

  return data.messages;
}

export const getLocaleFromContext = (ctx: GetStaticPropsContext): string => {
  let locale = ctx.locale || ctx.defaultLocale || "en";
  if (locale === "pseudo") {
    locale = "en";
  }
  return locale;
};
