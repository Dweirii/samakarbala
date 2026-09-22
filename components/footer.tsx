import Image from "next/image";
import Link from "next/link";
import { contact, type Dictionary } from "@/lib/dictionary";
import { href, type Locale } from "@/lib/i18n";
import { navItems } from "./nav-links";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="mt-24 bg-ink text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-block rounded-card bg-white p-3">
            <Image src="/brand/logo.png" alt={t.company.name} width={640} height={498} className="h-16 w-auto" />
          </div>
          <p className="mt-6 max-w-sm leading-relaxed">{t.company.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-medium text-white">{t.footer.explore}</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems(t.nav).map((item) => (
              <li key={item.path}>
                <Link href={href(lang, item.path)} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="text-sm font-medium text-white">{t.footer.reach}</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={contact.phoneHref} dir="ltr" className="transition-colors hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>{t.company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.company.legal}
          </p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
