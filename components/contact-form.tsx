"use client";

import type { FormEvent } from "react";

type Labels = { name: string; emailField: string; subject: string; message: string; send: string; sendNote: string };

const field =
  "w-full rounded-card border border-line bg-paper px-4 py-3.5 outline-none transition-colors placeholder:text-ink-soft/60 focus:border-ink";

/** No mail backend exists yet, so the form hands a pre-filled message to the visitor's email app. */
export function ContactForm({ to, labels }: { to: string; labels: Labels }) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2">
        <span className="text-sm font-medium">{labels.name}</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">{labels.emailField}</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-sm font-medium">{labels.subject}</span>
        <input name="subject" required className={field} />
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-sm font-medium">{labels.message}</span>
        <textarea name="message" required rows={6} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary justify-center">
          {labels.send}
        </button>
        <p className="text-sm text-ink-soft">{labels.sendNote}</p>
      </div>
    </form>
  );
}
