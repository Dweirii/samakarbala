import Image from "next/image";
import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";
import { categoryStyle, productName, productSpec, type Product } from "@/lib/products";

export function ProductCard({ product, lang }: { product: Product; lang: Locale }) {
  const style = categoryStyle[product.category];
  const weight = productSpec(product, "weight", lang);

  return (
    <Link href={href(lang, `/products/${product.slug}`)} className="group block">
      <div className={`relative aspect-square overflow-hidden rounded-card ${style.tint}`}>
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
          className="object-contain p-6 transition-transform duration-500 ease-out-soft group-hover:scale-105"
        />
      </div>
      <h3 className="mt-3 font-medium leading-snug">{productName(product, lang)}</h3>
      {weight && <p className="mt-0.5 line-clamp-1 text-sm text-ink-soft">{weight}</p>}
    </Link>
  );
}
