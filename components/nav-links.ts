import type { Dictionary } from "@/lib/dictionary";

export const navItems = (t: Dictionary["nav"]) => [
  { path: "", label: t.home },
  { path: "/about", label: t.about },
  { path: "/products", label: t.products },
  { path: "/news", label: t.news },
  { path: "/gallery", label: t.gallery },
];
