import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-header";
import { getDictionary } from "@/lib/dictionary";
import { hasLocale, href } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.about.title, description: t.about.vision };
}

export default async function About({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const a = t.about;

  return (
    <>
      <PageHeader title={a.title} />

      {/* Vision */}
      <section className="container-site">
        <div className="relative overflow-hidden rounded-panel">
          <div className="relative aspect-[4/5] sm:aspect-[824/360]">
            <Image src="/media/hen-field.jpg" alt="" fill preload sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-7 text-white sm:max-w-xl sm:justify-center md:p-14">
            <p className="display text-3xl md:text-4xl">{a.lead}</p>
          </div>
        </div>
        <p className="mt-10 max-w-3xl text-xl leading-relaxed md:text-2xl">{a.vision}</p>
      </section>

      {/* Story */}
      <section className="container-site mt-24 grid gap-10 md:mt-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[347/183] overflow-hidden rounded-panel">
            <Image src="/media/quality-inspection.png" alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:self-center">
          <h2 className="display text-4xl md:text-5xl">{a.storyTitle}</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
            {a.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Scale */}
      <section className="container-site mt-24 md:mt-32">
        <h2 className="display text-4xl md:text-5xl">{a.scaleTitle}</h2>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {a.scale.map((item) => (
            <div key={item.label} className="flex flex-col bg-paper p-7">
              <dt className="order-2 mt-2 font-medium">{item.label}</dt>
              <dd className="display order-1 text-4xl text-comb md:text-5xl">{item.value}</dd>
              <dd className="order-3 mt-3 text-ink-soft">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Community + glance */}
      <section className="container-site mt-24 grid gap-4 md:mt-32 lg:grid-cols-2">
        <div className="rounded-panel bg-shell p-8 md:p-12">
          <h2 className="display text-3xl md:text-4xl">{a.communityTitle}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {a.community.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-panel bg-ink p-8 text-white md:p-12">
          <h2 className="display text-3xl md:text-4xl">{a.glanceTitle}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{a.glance}</p>
          <div className="relative mt-8 aspect-[347/183] overflow-hidden rounded-card">
            <Image src="/media/fleet.png" alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container-site mt-16 flex flex-wrap gap-3">
        <Link href={href(lang, "/products")} className="btn btn-primary">
          {t.home.heroCta}
          <Arrow />
        </Link>
        <Link href={href(lang, "/contact")} className="btn btn-quiet">
          {t.nav.contact}
        </Link>
      </section>
    </>
  );
}
