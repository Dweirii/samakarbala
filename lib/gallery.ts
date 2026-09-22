export type GalleryImage = { src: string; width: number; height: number; alt: { en: string; ar: string } };

export const gallery: GalleryImage[] = [
  { src: "/media/processing-line.png", width: 361, height: 417, alt: { en: "Automated processing line", ar: "خط التصنيع الآلي" } },
  { src: "/media/hero-range.jpg", width: 2048, height: 899, alt: { en: "Al Rayan and Bawadi product range", ar: "تشكيلة منتجات الريان وبوادي" } },
  { src: "/media/alrayan-crates.png", width: 328, height: 321, alt: { en: "Al Rayan chicken packed in crates", ar: "دجاج الريان معبأ في الصناديق" } },
  { src: "/media/quality-inspection.png", width: 347, height: 183, alt: { en: "Quality inspection on the packing floor", ar: "فحص الجودة في قسم التعبئة" } },
  { src: "/media/fleet.png", width: 347, height: 183, alt: { en: "Sama Karbala distribution fleet", ar: "أسطول التوزيع لسما كربلاء" } },
  { src: "/media/cold-storage.png", width: 347, height: 183, alt: { en: "Cold storage and dispatch", ar: "التخزين المبرد والشحن" } },
  { src: "/media/alrayan-banner.png", width: 1442, height: 642, alt: { en: "Al Rayan, quality guaranteed", ar: "الريان، جودة مضمونة" } },
  { src: "/media/hen-field.jpg", width: 824, height: 360, alt: { en: "A hen in open pasture", ar: "دجاجة في المرعى" } },
];
