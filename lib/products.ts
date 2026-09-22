export type CategorySlug = "alrayan" | "bawadi" | "bawadi-factories";
export type SpecKey = "weight" | "packaging" | "shelfLife" | "pieces";
export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  category: CategorySlug;
  image: string;
  specs: { key: SpecKey; en: string; ar: string }[];
};

export const products: Product[] = [
  {
    "slug": "hearts",
    "name": "Hearts",
    "nameAr": "قلوب الريان",
    "category": "alrayan",
    "image": "/products/hearts.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g – 900g",
        "ar": "300 غم – 450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "high-quality-fresh-chicken",
    "name": "High Quality Fresh Chicken",
    "nameAr": "دجاج الريان",
    "category": "alrayan",
    "image": "/products/high-quality-fresh-chicken.png",
    "specs": [
      {
        "key": "weight",
        "en": "800 gm – 900 gm 1000 gm – 1100 gm 1200 gm 1300 gm – 1400 gm – 1500 gm 1600 gm – 1700 gm – 1800 gm",
        "ar": "٨٠٠ غم – ٩٠٠ غم ١٠٠٠ غم – ١١٠٠ غم ١٢٠٠ غم ١٣٠٠ غم – ١٤٠٠ غم – ١٥٠٠ غم ١٦٠٠ غم – ١٧٠٠ غم – ١٨٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "fillet-thigh-450g",
    "name": "Thigh Fillet",
    "nameAr": "فيليه أفخاذ الريان",
    "category": "alrayan",
    "image": "/products/fillet-thigh-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "livers-450g",
    "name": "Livers",
    "nameAr": "اكباد الريان",
    "category": "alrayan",
    "image": "/products/livers-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g – 900g",
        "ar": "300 غم – 450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "gizzards-450g-2",
    "name": "Gizzards",
    "nameAr": "حواصل الريان",
    "category": "alrayan",
    "image": "/products/gizzards-450g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g – 900g",
        "ar": "300 غم – 450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "drumstick-2",
    "name": "Drumstick",
    "nameAr": "عصا الطبل",
    "category": "alrayan",
    "image": "/products/drumstick-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "wings-450g-2",
    "name": "Wings",
    "nameAr": "أجنحة الريان",
    "category": "alrayan",
    "image": "/products/wings-450g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "premium-fresh-chicken",
    "name": "Premium Fresh Chicken",
    "nameAr": "دجاج الريان",
    "category": "alrayan",
    "image": "/products/premium-fresh-chicken.png",
    "specs": [
      {
        "key": "weight",
        "en": "1000g – 1100g 1200g – 1300g",
        "ar": "١٠٠٠غم ١١٠٠غم 1200غم 1300غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "thigh-450g-2",
    "name": "Thigh",
    "nameAr": "ورك الريان",
    "category": "alrayan",
    "image": "/products/thigh-450g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "thigh-fillets-450g",
    "name": "Thigh Fillets",
    "nameAr": "فيليه أفخاذ بوادي",
    "category": "bawadi",
    "image": "/products/thigh-fillets-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "breast-fillets-450g",
    "name": "Breast Fillets",
    "nameAr": "فيليه صدور",
    "category": "bawadi",
    "image": "/products/breast-fillets-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "legs-900g-2",
    "name": "Legs",
    "nameAr": "افخاذ بوادي",
    "category": "bawadi",
    "image": "/products/legs-900g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "wings",
    "name": "Wings",
    "nameAr": "أجنحة بوادي",
    "category": "bawadi",
    "image": "/products/wings.png",
    "specs": []
  },
  {
    "slug": "drumstick",
    "name": "Drumstick",
    "nameAr": "عصا الطبل بوادي",
    "category": "bawadi",
    "image": "/products/drumstick.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "thigh-fillet",
    "name": "Thigh Fillet",
    "nameAr": "فيليه أفخاذ بوادي",
    "category": "bawadi",
    "image": "/products/thigh-fillet.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "thigh",
    "name": "Thigh",
    "nameAr": "ورك بوادي",
    "category": "bawadi",
    "image": "/products/thigh.png",
    "specs": []
  },
  {
    "slug": "breast-fillet",
    "name": "Breast Fillet",
    "nameAr": "فيليه صدور",
    "category": "bawadi",
    "image": "/products/breast-fillet.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "thigh-450g",
    "name": "Thigh",
    "nameAr": "ورك بوادي",
    "category": "bawadi",
    "image": "/products/thigh-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "gizzards-450g",
    "name": "Gizzards",
    "nameAr": "حواصل بوادي",
    "category": "bawadi",
    "image": "/products/gizzards-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g 900g",
        "ar": "٣٠٠ غم – ٤٥٠ غم ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "bawadi-chicken",
    "name": "Bawadi Chicken",
    "nameAr": "دجاج بوادي",
    "category": "bawadi",
    "image": "/products/bawadi-chicken.png",
    "specs": [
      {
        "key": "weight",
        "en": "800 gm – 900 gm 1000 gm – 1100 gm 1200 gm 1300 gm – 1400 gm – 1500 gm 1600 gm – 1700 gm1800 gm",
        "ar": "٨٠٠ غم – ٩٠٠ غم 1000 غم – 1100 غم – 1200 غم 1300 غم – 1400 غم – 1500 غم 1600 غم – 1700 غم – 1800 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "wings-450g",
    "name": "Wings",
    "nameAr": "أجنحة بوادي",
    "category": "bawadi",
    "image": "/products/wings-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "٤٥٠ غم – ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "drumstick-450g",
    "name": "Drumstick",
    "nameAr": "عصا الطبل بوادي",
    "category": "bawadi",
    "image": "/products/drumstick-450g.png",
    "specs": []
  },
  {
    "slug": "livers",
    "name": "Livers",
    "nameAr": "اكباد بوادي",
    "category": "bawadi",
    "image": "/products/livers.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g 900g",
        "ar": "٣٠٠ غم – ٤٥٠ غم ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "chicken-strips-750g",
    "name": "Chicken Strips",
    "nameAr": "ستربس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-strips-750g.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "spicy-chicken-strips-750g",
    "name": "Spicy Chicken Strips",
    "nameAr": "ستربس الدجاج الحار",
    "category": "bawadi-factories",
    "image": "/products/spicy-chicken-strips-750g.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-750g",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-750g.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-200g-2",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-200g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "200g",
        "ar": "٢٠٠غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-400g-2",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-400g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-700g",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-700g.png",
    "specs": [
      {
        "key": "weight",
        "en": "700g",
        "ar": "٧٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-franks",
    "name": "Chicken Franks",
    "nameAr": "نقانق الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-franks.png",
    "specs": [
      {
        "key": "weight",
        "en": "340g",
        "ar": "٣٤٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-burger-1350g",
    "name": "Chicken Burger",
    "nameAr": "برجر دجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-burger-1350g.png",
    "specs": [
      {
        "key": "weight",
        "en": "1350g",
        "ar": "١٣٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chicken-burger-1500g",
    "name": "Crispy Chicken Burger",
    "nameAr": "برجر كرسبي دجاج",
    "category": "bawadi-factories",
    "image": "/products/crispy-chicken-burger-1500g.png",
    "specs": [
      {
        "key": "weight",
        "en": "1500g",
        "ar": "١٥٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chicken-burger-900g",
    "name": "Crispy Chicken Burger",
    "nameAr": "برجر كرسبي دجاج",
    "category": "bawadi-factories",
    "image": "/products/crispy-chicken-burger-900g.png",
    "specs": [
      {
        "key": "weight",
        "en": "900g",
        "ar": "٩٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-strips-1kg",
    "name": "Chicken Strips",
    "nameAr": "ستربس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-strips-1kg.png",
    "specs": [
      {
        "key": "weight",
        "en": "1Kg",
        "ar": "١٠٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-strips-400g",
    "name": "Chicken Strips",
    "nameAr": "ستربس الدجاج الحار",
    "category": "bawadi-factories",
    "image": "/products/chicken-strips-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "spicy-chicken-strips-1kg",
    "name": "Spicy Chicken Strips",
    "nameAr": "ستربس الدجاج الحار",
    "category": "bawadi-factories",
    "image": "/products/spicy-chicken-strips-1kg.png",
    "specs": [
      {
        "key": "weight",
        "en": "1Kg",
        "ar": "١٠٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-strips",
    "name": "Chicken Strips",
    "nameAr": "ستربس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-strips.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-400g",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets-200g",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets-200g.png",
    "specs": [
      {
        "key": "weight",
        "en": "200g",
        "ar": "٢٠٠غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "cordon-blue-400g",
    "name": "Cordon Bleu",
    "nameAr": "كوردن بلو الدجاج",
    "category": "bawadi-factories",
    "image": "/products/cordon-blue-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-spicy-chicken-fillets-400g-2",
    "name": "Crispy Spicy Chicken Fillets",
    "nameAr": "فيليه الدجاج الحار المقرمش",
    "category": "bawadi-factories",
    "image": "/products/crispy-spicy-chicken-fillets-400g-2.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-spicy-chicken-fillets-400g",
    "name": "Crispy Spicy Chicken Fillets",
    "nameAr": "فيليه الدجاج الحار المقرمش",
    "category": "bawadi-factories",
    "image": "/products/crispy-spicy-chicken-fillets-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chiken-fillets-400g",
    "name": "Crispy Chicken Fillets",
    "nameAr": "فيليه الدجاج المقرمش",
    "category": "bawadi-factories",
    "image": "/products/crispy-chiken-fillets-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-kebab",
    "name": "Chicken Kebab",
    "nameAr": "كباب الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-kebab.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chicken-fillets",
    "name": "Crispy Chicken Fillets",
    "nameAr": "فيليه الدجاج المقرمش",
    "category": "bawadi-factories",
    "image": "/products/crispy-chicken-fillets.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chicken-burger",
    "name": "Crispy Chicken Burger",
    "nameAr": "برجر كرسبي دجاج",
    "category": "bawadi-factories",
    "image": "/products/crispy-chicken-burger.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g",
        "ar": "٤٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-burger",
    "name": "Chicken Burger",
    "nameAr": "برجر دجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-burger.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-fries-180g",
    "name": "Chicken Fries",
    "nameAr": "اصابع الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-fries-180g.png",
    "specs": [
      {
        "key": "weight",
        "en": "180g",
        "ar": "١٨٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-fries-herbal",
    "name": "Chicken Fries Herbal",
    "nameAr": "أصابع الدجاج بالأعشاب",
    "category": "bawadi-factories",
    "image": "/products/chicken-fries-herbal.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-shawerma",
    "name": "Chicken Shawarma",
    "nameAr": "شاورما الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-shawerma.png",
    "specs": [
      {
        "key": "weight",
        "en": "200g",
        "ar": "٢٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "6 months from the date of production",
        "ar": "صالح لمدة ٦ أشهر من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-escalope-750g",
    "name": "Chicken Escalope",
    "nameAr": "اسكالوب الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-escalope-750g.png",
    "specs": []
  },
  {
    "slug": "chicken-escalope-400g",
    "name": "Chicken Escalope",
    "nameAr": "اسكالوب الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-escalope-400g.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-fries",
    "name": "Chicken Fries",
    "nameAr": "اصابع الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-fries.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٤٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-nuggets",
    "name": "Chicken Nuggets",
    "nameAr": "ناجتس الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-nuggets.png",
    "specs": []
  },
  {
    "slug": "cordn-blue-jalapeno",
    "name": "Cordon Bleu Jalapeño",
    "nameAr": "كوردن بلو هالبينو",
    "category": "bawadi-factories",
    "image": "/products/cordn-blue-jalapeno.png",
    "specs": []
  },
  {
    "slug": "chicken-mortadella-with-black-pepper",
    "name": "Chicken Mortadella With Black Pepper",
    "nameAr": "مرتديلا دجاج بالفلفل الأسود",
    "category": "bawadi-factories",
    "image": "/products/chicken-mortadella-with-black-pepper.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٢٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "6 months from the date of production",
        "ar": "صالح لمدة ٦ أشهر من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-moratdella",
    "name": "Chicken Mortadella",
    "nameAr": "مرتديلا دجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-moratdella.png",
    "specs": [
      {
        "key": "weight",
        "en": "400g",
        "ar": "٢٠٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "6 months from the date of production",
        "ar": "صالح لمدة ٦ أشهر من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-popcorn",
    "name": "Chicken Popcorn",
    "nameAr": "بوب كورن الدجاج",
    "category": "bawadi-factories",
    "image": "/products/chicken-popcorn.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "chicken-450g",
    "name": "Fillet Breast",
    "nameAr": "فيليه صدور الريان",
    "category": "alrayan",
    "image": "/products/chicken-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "450g – 900g",
        "ar": "450 غم – 900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "legs-900g",
    "name": "Legs",
    "nameAr": "افخاذ الريان",
    "category": "alrayan",
    "image": "/products/legs-900g.png",
    "specs": [
      {
        "key": "weight",
        "en": "900g",
        "ar": "900 غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "hearts-450g",
    "name": "Hearts",
    "nameAr": "قلوب بوادي",
    "category": "bawadi",
    "image": "/products/hearts-450g.png",
    "specs": [
      {
        "key": "weight",
        "en": "300g – 450g 900g",
        "ar": "٣٠٠ غم – ٤٥٠ غم ٩٠٠ غم"
      },
      {
        "key": "packaging",
        "en": "10 plates",
        "ar": "١٠ أطباق"
      }
    ]
  },
  {
    "slug": "chicken-legs",
    "name": "Chicken Legs",
    "nameAr": "أفخاذ بوادي",
    "category": "bawadi",
    "image": "/products/chicken-legs.png",
    "specs": []
  },
  {
    "slug": "spicy-crispy-chicken-thigh",
    "name": "Spicy Crispy Chicken Thigh",
    "nameAr": "فخذ دجاج مقرمش حار",
    "category": "bawadi-factories",
    "image": "/products/spicy-crispy-chicken-thigh.png",
    "specs": [
      {
        "key": "pieces",
        "en": "8 pieces",
        "ar": "٨ قطع"
      },
      {
        "key": "shelfLife",
        "en": "6 months from the date of production",
        "ar": "صالح لمدة ٦ أشهر من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "spicy-crispy-chicken-wings",
    "name": "Spicy Crispy Chicken Wings",
    "nameAr": "اجنحة دجاج مقرمشة حارة",
    "category": "bawadi-factories",
    "image": "/products/spicy-crispy-chicken-wings.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "6 months from the date of production",
        "ar": "صالح لمدة ٦ أشهر من تاريخ الإنتاج"
      }
    ]
  },
  {
    "slug": "crispy-chicken-wings",
    "name": "Crispy Chicken Wings",
    "nameAr": "اجنحة دجاج مقرمشة",
    "category": "bawadi-factories",
    "image": "/products/crispy-chicken-wings.png",
    "specs": [
      {
        "key": "weight",
        "en": "750g",
        "ar": "٧٥٠ غم"
      },
      {
        "key": "shelfLife",
        "en": "one year from the date of production",
        "ar": "صالح لمدة سنة من تاريخ الإنتاج"
      }
    ]
  }
];
