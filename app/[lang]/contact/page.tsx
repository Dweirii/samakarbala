import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import { contact, getDictionary } from "@/lib/dictionary";
import { hasLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return { title: t.contactPage.title, description: t.contactPage.intro };
}

export default async function Contact({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const c = t.contactPage;

  const channels = [
    { label: c.phone, value: contact.phone, href: contact.phoneHref, ltr: true },
    { label: c.email, value: contact.email, href: `mailto:${contact.email}`, ltr: true },
    { label: c.address, value: t.company.address, href: contact.mapsHref, ltr: false },
  ];

  return (
    <>
      <PageHeader title={c.title} intro={c.intro} />

      <section className="container-site grid gap-4 md:grid-cols-3">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target={ch.href.startsWith("http") ? "_blank" : undefined}
            rel={ch.href.startsWith("http") ? "noreferrer" : undefined}
            className="group rounded-panel bg-shell p-7 transition-colors hover:bg-line"
          >
            <p className="text-sm text-ink-soft">{ch.label}</p>
            <p dir={ch.ltr ? "ltr" : undefined} className="mt-2 text-xl font-medium group-hover:text-comb rtl:text-right">
              {ch.value}
            </p>
          </a>
        ))}
      </section>

      <section className="container-site mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="display text-3xl md:text-4xl">{c.formTitle}</h2>
          <div className="mt-8">
            <ContactForm
              to={contact.email}
              labels={{
                name: c.name,
                emailField: c.emailField,
                subject: c.subject,
                message: c.message,
                send: c.send,
                sendNote: c.sendNote,
              }}
            />
          </div>
        </div>
        <div className="flex flex-col lg:col-span-5">
          <div className="min-h-80 flex-1 overflow-hidden rounded-panel bg-shell">
            <iframe
              title={t.company.address}
              src="https://www.google.com/maps?q=Karbala%20Strategic%20Road%2C%20Iraq&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-80 grayscale-[0.4]"
            />
          </div>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="btn btn-quiet mt-4 self-start">
            {c.directions}
          </a>
        </div>
      </section>
    </>
  );
}
