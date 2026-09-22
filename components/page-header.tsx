import type { ReactNode } from "react";

export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="container-site pt-12 pb-10 md:pt-20 md:pb-14">
      <h1 className="display rise text-5xl md:text-7xl">{title}</h1>
      {intro && (
        <p className="rise mt-5 max-w-2xl text-lg text-ink-soft md:text-xl" style={{ animationDelay: "100ms" }}>
          {intro}
        </p>
      )}
      {children}
    </section>
  );
}
