"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Item = { src: string; width: number; height: number; alt: string };

export function GalleryGrid({
  items,
  labels,
}: {
  items: Item[];
  labels: { close: string; previous: string; next: string };
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      const rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : items[index];

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <li key={item.src} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              className="group block w-full overflow-hidden rounded-card bg-shell"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto size-full max-h-none max-w-none bg-transparent p-0 backdrop:bg-ink/90"
      >
        {current && (
          <div className="flex size-full flex-col items-center justify-center gap-4 p-4 md:p-10" onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              quality={90}
              className="max-h-[78dvh] w-auto rounded-card object-contain"
            />
            <p className="text-white/80">{current.alt}</p>
            <div className="flex gap-2">
              <button type="button" onClick={() => step(-1)} className="btn bg-white/10 text-white hover:bg-white/20">
                {labels.previous}
              </button>
              <button type="button" onClick={() => dialog.current?.close()} className="btn bg-white text-ink">
                {labels.close}
              </button>
              <button type="button" onClick={() => step(1)} className="btn bg-white/10 text-white hover:bg-white/20">
                {labels.next}
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
