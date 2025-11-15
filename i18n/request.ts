import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["en", "cs"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export default getRequestConfig(async (params) => {
  const locale = params.locale || (await params.requestLocale) || defaultLocale;
  console.log("locale", locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
