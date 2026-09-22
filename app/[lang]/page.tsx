import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { NewsCard } from "@/components/news-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";
import { posts } from "@/lib/posts";
import { categoryOrder, categoryStyle, getProduct, productsIn } from "@/lib/products";

const featuredSlugs = [
  "crispy-chicken-wings",
  "spicy-crispy-chicken-wings",
  "spicy-crispy-chicken-thigh",
  "chicken-nuggets-750g",
];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const featured = featuredSlugs.map(getProduct).filter((p) => p !== undefined);

  return (
    <>
      {/* Hero */}
      <section className="container-site pt-10 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="display rise text-[2.75rem] sm:text-6xl lg:col-span-8 lg:text-[5.25rem]">
            {t.home.heroTitle}
          </h1>
          <div className="rise lg:col-span-4 lg:pb-2" style={{ animationDelay: "120ms" }}>
            <p className="text-lg leading-relaxed text-ink-soft">{t.home.heroBody}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={href(lang, "/products")} className="btn btn-primary">
                {t.home.heroCta}
                <Arrow />
              </Link>
              <Link href={href(lang, "/about")} className="btn btn-quiet">
                {t.home.heroSecondary}
              </Link>
            </div>
          </div>
        </div>

        <div className="rise relative mt-10 md:mt-14" style={{ animationDelay: "220ms" }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-shell sm:aspect-[2048/899]">
            <Image
              src="/media/hero-range.jpg"
              alt=""
              fill
              preload
              quality={90}
              sizes="(min-width: 1344px) 1264px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 start-6 rounded-card bg-paper px-6 py-4 shadow-[0_12px_40px_-12px_rgb(35_34_32/0.25)] md:start-10">
            <p className="display text-4xl text-comb" dir="ltr">
              25–30%
            </p>
            <p className="mt-1 text-sm text-ink-soft">{t.home.marketShare}</p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="container-site mt-28 md:mt-36">
        <SectionHeading title={t.home.brandsTitle} body={t.home.brandsBody} />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {categoryOrder.map((slug) => {
            const c = t.categories[slug];
            const style = categoryStyle[slug];
            return (
              <Link
                key={slug}
                href={href(lang, `/products?brand=${slug}`)}
                className={`group relative flex flex-col overflow-hidden rounded-panel p-7 ${style.tint}`}
              >
                <p className={`text-sm font-medium ${style.accent}`}>{c.kind}</p>
                <h3 className="display mt-2 text-3xl">{c.name}</h3>
                <p className="mt-3 max-w-xs text-ink-soft">{c.body}</p>
                <div className="relative mt-6 aspect-square w-full">
                  <Image
                    src={style.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-contain transition-transform duration-700 ease-out-soft group-hover:-translate-y-2"
                  />
                </div>
                <span className={`mt-4 inline-flex items-center gap-2 font-medium ${style.accent}`}>
                  {t.products.count(productsIn(slug).length)}
                  <Arrow />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Production chain — a real sequence, so it is numbered */}
      <section className="mt-28 bg-ink text-white md:mt-36">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="display text-4xl md:text-5xl">{t.home.chainTitle}</h2>
            <p className="mt-5 max-w-md text-lg text-white/70">{t.home.chainBody}</p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-panel">
              <Image
                src="/media/processing-line.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {t.chain.map((step, i) => (
              <li key={step.label} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/15 py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
                <span className="pt-2 text-sm text-white/40 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="display text-5xl md:text-6xl">{step.value}</p>
                  <p className="mt-3 text-lg font-medium">{step.label}</p>
                  <p className="mt-1 text-white/60">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured processed products */}
      <section className="container-site mt-28 md:mt-36">
        <SectionHeading
          title={t.home.featuredTitle}
          body={t.home.featuredBody}
          action={
            <Link href={href(lang, "/products")} className="btn btn-quiet self-start md:self-auto">
              {t.home.allProducts}
              <Arrow />
            </Link>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </section>

      {/* Promises */}
      <section className="container-site mt-28 md:mt-36">
        <div className="rounded-panel bg-shell p-8 md:p-14">
          <h2 className="display text-3xl md:text-4xl">{t.home.promiseTitle}</h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.promises.map((item) => (
              <li key={item.title}>
                <Image src={item.image} alt="" width={64} height={64} className="size-16 object-contain" />
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-1 text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* News */}
      <section className="container-site mt-28 md:mt-36">
        <SectionHeading
          title={t.home.newsTitle}
          action={
            <Link href={href(lang, "/news")} className="btn btn-quiet self-start md:self-auto">
              {t.home.allNews}
              <Arrow />
            </Link>
          }
        />
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <NewsCard key={post.slug} post={post} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
