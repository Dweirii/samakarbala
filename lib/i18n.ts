export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const dir = (lang: Locale) => (lang === "ar" ? "rtl" : "ltr");

/** Prefix an internal path with the locale, e.g. href("ar", "/about") -> "/ar/about". */
export const href = (lang: Locale, path = "") => `/${lang}${path === "/" ? "" : path}`;
