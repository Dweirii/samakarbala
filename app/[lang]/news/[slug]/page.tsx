import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { formatDate, NewsCard } from "@/components/news-card";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href, locales } from "@/lib/i18n";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date, images: [post.image] },
  };
}

export default async function Article({ params }: PageProps<"/[lang]/news/[slug]">) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!hasLocale(lang) || !post) notFound();
  const t = getDictionary(lang);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-site max-w-4xl pt-8">
          <Link
            href={href(lang, "/news")}
            className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
          >
            <Arrow className="rotate-180" />
            {t.news.back}
          </Link>
          <time dateTime={post.date} className="mt-10 block text-ink-soft">
            {formatDate(post.date, lang)}
          </time>
          <h1 dir="ltr" lang="en" className="display mt-3 text-4xl rtl:text-right md:text-6xl">
            {post.title}
          </h1>
        </header>

        <div className="container-site mt-10 max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-panel bg-shell">
            <Image src={post.image} alt="" fill preload sizes="(min-width: 1152px) 1072px, 100vw" className="object-cover" />
          </div>
        </div>

        <div className="container-site mt-12 max-w-3xl">
          <div dir="ltr" lang="en" className="prose-article" dangerouslySetInnerHTML={{ __html: post.html }} />

          {post.youtube.map((id) => (
            <div key={id} className="mt-10 aspect-video overflow-hidden rounded-card bg-ink">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
                title={`${t.news.watch}: ${post.title}`}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="size-full"
              />
            </div>
          ))}
        </div>
      </article>

      <section className="container-site mt-28">
        <h2 className="display text-3xl md:text-4xl">{t.news.more}</h2>
        <div className="mt-10 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p) => (
            <NewsCard key={p.slug} post={p} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
