"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Item = { href: string; label: string };

export function HeaderNav({
  lang,
  items,
  contact,
  labels,
}: {
  lang: Locale;
  items: Item[];
  contact: Item;
  labels: { switchLang: string; switchLangLabel: string; menu: string; close: string };
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const other = lang === "en" ? "ar" : "en";
  const switchHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  const isActive = (target: string) =>
    target === `/${lang}` ? pathname === target : pathname.startsWith(target);

  return (
    <>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className="rounded-full px-4 py-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink aria-[current=page]:bg-shell aria-[current=page]:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          href={switchHref}
          hrefLang={other}
          lang={other}
          aria-label={labels.switchLangLabel}
          className="rounded-full px-3 py-2 text-[0.95rem] text-ink-soft transition-colors hover:text-ink"
        >
          {labels.switchLang}
        </Link>
        <Link href={contact.href} className="btn btn-primary hidden !py-2.5 sm:inline-flex">
          {contact.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative grid size-11 place-items-center rounded-full bg-shell lg:hidden"
        >
          <span className="sr-only">{open ? labels.close : labels.menu}</span>
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded bg-ink transition-transform duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-ink transition-transform duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-18 bottom-0 z-30 overflow-y-auto bg-paper lg:hidden"
      >
        <nav className="container-site flex flex-col py-6" aria-label="Mobile">
          {[...items, contact].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="display border-b border-line py-5 text-3xl aria-[current=page]:text-comb"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
