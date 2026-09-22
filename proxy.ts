import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";
import { posts } from "@/lib/posts";

// Old WordPress article URLs lived at the site root, e.g. /etihad-flour-mill/.
const legacyPosts = new Map(posts.map((p) => [p.slug, p.slug]));
legacyPosts.set("coming-soon", "etihad-mills-world-class-quality");

function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language") ?? "";
  const first = header.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("ar") ? "ar" : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  const segments = pathname.split("/").filter(Boolean);
  const [first, second] = segments;
  const isArabicLegacy = first === "ar" && segments.length === 2 && legacyPosts.has(second);
  if (isArabicLegacy || (segments.length === 1 && legacyPosts.has(first))) {
    const lang = isArabicLegacy ? "ar" : "en";
    const slug = legacyPosts.get(isArabicLegacy ? second : first);
    return NextResponse.redirect(new URL(`/${lang}/news/${slug}`, request.url), 308);
  }

  if (hasLocale) return;

  request.nextUrl.pathname = `/${preferredLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes and anything with a file extension (public assets).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
