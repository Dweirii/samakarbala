import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { ProductCard } from "@/components/product-card";
import { contact, getDictionary } from "@/lib/dictionary";
import { hasLocale, href, locales } from "@/lib/i18n";
import { categoryStyle, getProduct, productName, products, productsIn } from "@/lib/products";

export function generateStaticParams() {
  return locales.flatMap((lang) => products.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/products/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!hasLocale(lang) || !product) return {};
  const t = getDictionary(lang);
  return {
    title: productName(product, lang),
    description: `${t.categories[product.category].name} — ${t.categories[product.category].kind}`,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({ params }: PageProps<"/[lang]/products/[slug]">) {
  const { lang, slug } = await params;
  const product = getProduct(slug);
  if (!hasLocale(lang) || !product) notFound();

  const t = getDictionary(lang);
  const category = t.categories[product.category];
  const style = categoryStyle[product.category];
  const name = productName(product, lang);
  const otherName = lang === "ar" ? product.name : product.nameAr;
  const related = productsIn(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`${product.name} / ${product.nameAr}`)}`;

  return (
    <>
      <div className="container-site pt-8">
        <Link
          href={href(lang, "/products")}
          className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
        >
          <Arrow className="rotate-180" />
          {t.products.back}
        </Link>
      </div>

      <section className="container-site mt-6 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className={`relative aspect-square overflow-hidden rounded-panel lg:col-span-7 ${style.tint}`}>
          <Image
            src={product.image}
            alt={name}
            fill
            preload
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="rise object-contain p-10 md:p-16"
          />
        </div>

        <div className="lg:col-span-5 lg:self-center">
          <Link
            href={href(lang, `/products?brand=${product.category}`)}
            className={`text-sm font-medium ${style.accent} hover:underline`}
          >
            {category.name}, {category.kind.toLowerCase()}
          </Link>
          <h1 className="display mt-3 text-4xl md:text-5xl">{name}</h1>
          {otherName !== name && (
            <p lang={lang === "ar" ? "en" : "ar"} className="mt-3 text-xl text-ink-soft">
              {otherName}
            </p>
          )}

          {product.specs.length > 0 && (
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {product.specs.map((spec) => (
                <div key={spec.key} className="grid grid-cols-[8rem_1fr] gap-4 py-4">
                  <dt className="text-ink-soft">{t.products.specs[spec.key]}</dt>
                  <dd className="font-medium">{lang === "ar" ? spec.ar : spec.en}</dd>
                </div>
              ))}
            </dl>
          )}

          <a href={mailto} className="btn btn-primary mt-10">
            {t.products.inquire}
            <Arrow />
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-site mt-28">
          <h2 className="display text-3xl md:text-4xl">
            {t.products.related} {category.name}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} lang={lang} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
