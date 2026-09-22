import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Readex_Pro } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getDictionary } from "@/lib/dictionary";
import { dir, hasLocale, locales } from "@/lib/i18n";
import "../globals.css";

const readex = Readex_Pro({
  subsets: ["latin", "arabic"],
  axes: ["HEXP"],
  variable: "--font-readex",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL("https://samakarbala.iq"),
    title: { default: t.meta.title, template: `%s | ${t.company.name}` },
    description: t.meta.description,
    icons: { icon: "/brand/favicon.png" },
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: { siteName: t.company.name, images: ["/media/hero-range.jpg"] },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} dir={dir(lang)} className={`${readex.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <Header lang={lang} t={t} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  );
}
