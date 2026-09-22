import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";
import { categoryOrder, categoryStyle, isCategory, productsIn, type CategorySlug } from "@/lib/products";

export async function generateMetadata({ params }: PageProps<"/[lang]/products">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.products.title, description: t.products.intro };
}

export default async function Products({ params, searchParams }: PageProps<"/[lang]/products">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);

  const { brand } = await searchParams;
  const active: CategorySlug | null = typeof brand === "string" && isCategory(brand) ? brand : null;
  const shown = active ? [active] : categoryOrder;

  const filters = [
    { key: null, label: t.products.all },
    ...categoryOrder.map((slug) => ({ key: slug, label: t.categories[slug].name })),
  ];

  return (
    <>
      <PageHeader title={t.products.title} intro={t.products.intro}>
        <nav aria-label={t.products.brand} className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Link
              key={f.label}
              href={href(lang, f.key ? `/products?brand=${f.key}` : "/products")}
              aria-current={active === f.key ? "page" : undefined}
              scroll={false}
              className="rounded-full border border-line px-5 py-2.5 text-[0.95rem] transition-colors hover:border-ink aria-[current=page]:border-ink aria-[current=page]:bg-ink aria-[current=page]:text-white"
            >
              {f.label}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <div className="container-site space-y-24">
        {shown.map((slug) => {
          const c = t.categories[slug];
          const style = categoryStyle[slug];
          const items = productsIn(slug);
          return (
            <section key={slug} id={slug} aria-labelledby={`${slug}-title`}>
              <div className={`flex items-center gap-6 overflow-hidden rounded-panel px-7 py-6 md:px-10 ${style.tint}`}>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${style.accent}`}>{c.kind}</p>
                  <h2 id={`${slug}-title`} className="display mt-1 text-3xl md:text-4xl">
                    {c.name}
                  </h2>
                  <p className="mt-2 max-w-md text-ink-soft">{c.body}</p>
                  <p className="mt-3 text-sm text-ink-soft">{t.products.count(items.length)}</p>
                </div>
                <div className="relative hidden size-36 shrink-0 sm:block md:size-44">
                  <Image src={style.image} alt="" fill sizes="176px" className="object-contain" />
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.slug} product={p} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
