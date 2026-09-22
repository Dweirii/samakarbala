import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { products } from "@/lib/products";

const base = "https://samakarbala.iq";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/products",
    "/news",
    "/gallery",
    "/contact",
    ...products.map((p) => `/products/${p.slug}`),
    ...posts.map((p) => `/news/${p.slug}`),
  ];
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${base}/${lang}${path}`,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])) },
    })),
  );
}
