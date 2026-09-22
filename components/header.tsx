import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import { href, type Locale } from "@/lib/i18n";
import { HeaderNav } from "./header-nav";
import { navItems } from "./nav-links";

export function Header({ lang, t }: { lang: Locale; t: Dictionary }) {
  const items = navItems(t.nav).map((item) => ({ href: href(lang, item.path), label: item.label }));

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <Link href={href(lang)} className="shrink-0" aria-label={t.company.name}>
          <Image
            src="/brand/logo.png"
            alt={t.company.name}
            width={640}
            height={498}
            preload
            className="h-12 w-auto"
          />
        </Link>
        <HeaderNav
          lang={lang}
          items={items}
          contact={{ href: href(lang, "/contact"), label: t.nav.contact }}
          labels={{
            switchLang: t.nav.switchLang,
            switchLangLabel: t.nav.switchLangLabel,
            menu: t.nav.menu,
            close: t.nav.close,
          }}
        />
      </div>
    </header>
  );
}
