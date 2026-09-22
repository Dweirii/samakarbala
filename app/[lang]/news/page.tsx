import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { formatDate, NewsCard } from "@/components/news-card";
import { PageHeader } from "@/components/page-header";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";
import { posts } from "@/lib/posts";

export async function generateMetadata({ params }: PageProps<"/[lang]/news">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.news.title, description: t.news.intro };
}

export default async function News({ params }: PageProps<"/[lang]/news">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHeader title={t.news.title} intro={t.news.intro} />

      <section className="container-site">
        <Link
          href={href(lang, `/news/${lead.slug}`)}
          className="group grid overflow-hidden rounded-panel bg-shell lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[28rem]">
            <Image
              src={lead.image}
              alt=""
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <time dateTime={lead.date} className="text-sm text-ink-soft">
              {formatDate(lead.date, lang)}
            </time>
            <h2 dir="ltr" lang="en" className="display mt-3 text-3xl rtl:text-right md:text-4xl">
              {lead.title}
            </h2>
            <p dir="ltr" lang="en" className="mt-4 text-lg text-ink-soft rtl:text-right">
              {lead.excerpt}…
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-medium text-comb">
              {t.news.readMore}
              <Arrow className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </span>
          </div>
        </Link>
      </section>

      <section className="container-site mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <NewsCard key={post.slug} post={post} lang={lang} />
        ))}
      </section>
    </>
  );
}
