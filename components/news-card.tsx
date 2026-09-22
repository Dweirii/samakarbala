import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import type { Post } from "@/lib/posts";

export const formatDate = (iso: string, lang: Locale) =>
  new Intl.DateTimeFormat(lang === "ar" ? "ar-IQ" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

export function NewsCard({ post, lang }: { post: Post; lang: Locale }) {
  return (
    <Link href={href(lang, `/news/${post.slug}`)} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-shell">
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
        />
      </div>
      <time dateTime={post.date} className="mt-4 block text-sm text-ink-soft">
        {formatDate(post.date, lang)}
      </time>
      <h3 dir="ltr" className="mt-1 text-lg font-medium leading-snug text-balance rtl:text-right group-hover:text-comb">
        {post.title}
      </h3>
    </Link>
  );
}
