import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { getDictionary } from "@/lib/dictionary";
import { gallery } from "@/lib/gallery";
import { hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.gallery.title, description: t.gallery.intro };
}

export default async function Gallery({ params }: PageProps<"/[lang]/gallery">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <PageHeader title={t.gallery.title} intro={t.gallery.intro} />
      <section className="container-site">
        <GalleryGrid
          items={gallery.map((g) => ({ ...g, alt: g.alt[lang] }))}
          labels={{ close: t.gallery.close, previous: t.gallery.previous, next: t.gallery.next }}
        />
      </section>
    </>
  );
}
