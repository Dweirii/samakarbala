import type { Locale } from "./i18n";
import type { CategorySlug } from "./products";

export const contact = {
  phone: "+964 782 554 2642",
  phoneHref: "tel:+9647825542642",
  email: "info@samakarbala.iq",
  mapsHref: "https://maps.google.com/?q=Karbala+Strategic+Road+Iraq",
};

const en = {
  meta: {
    title: "Sama Karbala — Iraqi poultry, from farm to table",
    description:
      "Sama Karbala for Agricultural and Animal Production produces Al Rayan fresh chicken, Bawadi frozen chicken and Bawadi processed foods in Karbala, Iraq.",
  },
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    news: "News",
    gallery: "Gallery",
    contact: "Contact",
    switchLang: "عربي",
    switchLangLabel: "اقرأ الموقع بالعربية",
    menu: "Menu",
    close: "Close",
  },
  company: {
    name: "Sama Karbala",
    legal: "Sama Karbala for Agricultural and Animal Production Ltd.",
    address: "Strategic Road, Karbala, Iraq",
    tagline:
      "One of Iraq's largest producers of fresh and frozen chicken, raised, processed and packed in Karbala and slaughtered in accordance with Islamic law.",
  },
  home: {
    heroTitle: "Iraqi poultry, from our farms to your table.",
    heroBody:
      "We raise, process and pack chicken to international standards, with halal slaughter at every step. Three brands, one supply chain, all in Karbala.",
    heroCta: "See our products",
    heroSecondary: "About the company",
    marketShare: "of Iraq's poultry production",
    brandsTitle: "Three brands, one standard",
    brandsBody: "Every product is traced from the hatchery to the shelf.",
    chainTitle: "We control every stage of production",
    chainBody:
      "Since 2021 we have built the full cycle under one roof, so quality is checked before a product ever reaches the market.",
    featuredTitle: "From the Bawadi kitchen",
    featuredBody: "Ready-to-cook favourites, frozen at peak freshness.",
    allProducts: "View all products",
    newsTitle: "Latest news",
    allNews: "All news",
    promiseTitle: "What goes into every pack",
  },
  chain: [
    { value: "322M", label: "hatching eggs a year", detail: "producing 257 million broiler chicks" },
    { value: "960", label: "broiler houses", detail: "across 60 farms, 280 million birds a year" },
    { value: "5", label: "modern slaughterhouses", detail: "processing 748,000 chickens a day" },
    { value: "325,000", label: "tons of poultry a year", detail: "whole birds, cut-ups and processed foods" },
  ],
  promises: [
    { image: "/media/badge-halal.png", title: "100% halal", body: "Slaughtered in full compliance with Islamic law." },
    { image: "/media/badge-free-range.png", title: "Raised with care", body: "Healthy flocks under strict biosecurity on our own farms." },
    { image: "/media/badge-natural.png", title: "Natural", body: "Fresh chicken with nothing added." },
    { image: "/media/badge-quality.png", title: "Quality you can trust", body: "A quality management system across every facility." },
  ],
  categories: {
    alrayan: {
      name: "Al Rayan",
      kind: "Fresh chicken",
      body: "Chilled whole birds and cuts, delivered fresh daily to markets across Iraq.",
    },
    bawadi: {
      name: "Bawadi",
      kind: "Frozen chicken",
      body: "Whole birds and cuts, frozen quickly to lock in freshness and flavour.",
    },
    "bawadi-factories": {
      name: "Bawadi Factories",
      kind: "Processed foods",
      body: "Nuggets, burgers, strips and more, ready to cook at home.",
    },
  } satisfies Record<CategorySlug, { name: string; kind: string; body: string }>,
  products: {
    title: "Our products",
    intro: "Fresh, frozen and ready-to-cook chicken from Sama Karbala's three brands.",
    all: "All",
    count: (n: number) => `${n} products`,
    specs: { weight: "Weight", packaging: "Packaging", shelfLife: "Shelf life", pieces: "Contents" },
    related: "More from",
    back: "All products",
    inquire: "Ask about this product",
    brand: "Brand",
  },
  about: {
    title: "About us",
    lead: "A sustainable future where advanced technology meets trusted food security.",
    vision:
      "We aim to be a model in Iraq and the Middle East for producing poultry meat and its derivatives, combining the latest global technology with sustainable practices to deliver safe, healthy, high-quality food for local and regional markets.",
    storyTitle: "Who we are",
    story: [
      "Sama Karbala is an Iraqi private joint-stock company established in 2021. From the start, our goal has been to meet the needs of Iraqi families with high-quality products that conform to the highest international health standards.",
      "Our products are slaughtered in accordance with Islamic Sharia and prepared using modern technology. We control every stage of poultry production, from hatching eggs to the final product and its distribution across the Iraqi market.",
    ],
    scaleTitle: "Our scale in numbers",
    scale: [
      { value: "960", label: "Broiler houses", detail: "Across 60 farms, raising more than 280 million birds a year with advanced biosecurity." },
      { value: "325,000", label: "Tons of poultry meat", detail: "Produced every year to local and international standards." },
      { value: "322M", label: "Hatching eggs", detail: "A year, supplying 257 million broiler chicks to sustain the cycle." },
      { value: "5", label: "Slaughterhouses", detail: "With a combined capacity of 748,000 chickens a day." },
      { value: "112,000", label: "Tons of cut-ups", detail: "A year, in a wide range of portions for every kitchen." },
      { value: "54,000", label: "Tons of processed food", detail: "A year: burgers, nuggets, franks and more." },
      { value: "4,100+", label: "Employees", detail: "Working with professionalism, efficiency and team spirit." },
      { value: "25–30%", label: "Of Iraq's poultry", detail: "Our share of the country's poultry production." },
    ],
    communityTitle: "Local talent and community",
    community: [
      "We help train Iraqi engineers and graduates of Iraqi universities, and take part in social events that contribute to the development of the local community.",
      "Since 2023 we have distributed our products in the local market, with a comprehensive quality management system across every stage of production and every facility.",
    ],
    glanceTitle: "Safety, quality and teamwork",
    glance:
      "With a workforce of more than 4,100 people, we are committed to industrial safety, the wellbeing of our workers, product quality and teamwork across all company activities.",
  },
  news: {
    title: "News",
    intro: "Updates from Sama Karbala and Etihad Group.",
    readMore: "Read article",
    back: "All news",
    more: "More news",
    watch: "Watch the video",
  },
  gallery: {
    title: "Gallery",
    intro: "Inside our farms, plants and fleet.",
    close: "Close",
    previous: "Previous image",
    next: "Next image",
  },
  contactPage: {
    title: "Contact us",
    intro: "Questions about our products, distribution or partnerships? We're happy to help.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    formTitle: "Send us a message",
    name: "Your name",
    emailField: "Your email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
    sendNote: "This opens your email app with your message ready to send.",
    directions: "Get directions",
  },
  footer: {
    rights: "All rights reserved.",
    explore: "Explore",
    reach: "Get in touch",
  },
  notFound: {
    title: "We couldn't find that page",
    body: "It may have moved when we rebuilt the site. Try the home page or browse our products.",
    home: "Go to the home page",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "سما كربلاء — دواجن عراقية من المزرعة إلى المائدة",
    description:
      "شركة سما كربلاء للإنتاج الزراعي والحيواني تنتج دجاج الريان الطازج ودجاج بوادي المجمد ومصنعات بوادي في كربلاء، العراق.",
  },
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    products: "منتجاتنا",
    news: "الأخبار",
    gallery: "المعرض",
    contact: "تواصل معنا",
    switchLang: "English",
    switchLangLabel: "Read the site in English",
    menu: "القائمة",
    close: "إغلاق",
  },
  company: {
    name: "سما كربلاء",
    legal: "شركة سما كربلاء للإنتاج الزراعي والحيواني المحدودة",
    address: "الطريق الاستراتيجي، كربلاء، العراق",
    tagline:
      "واحدة من أكبر الشركات المنتجة للدجاج الطازج والمجمد في العراق، نربّيه ونصنّعه ونعبّئه في كربلاء، ونذبحه وفق أحكام الشريعة الإسلامية.",
  },
  home: {
    heroTitle: "دواجن عراقية، من مزارعنا إلى مائدتكم.",
    heroBody:
      "نربّي الدجاج ونصنّعه ونعبّئه وفق المعايير العالمية، مع الذبح الحلال في كل مرحلة. ثلاث علامات تجارية وسلسلة إنتاج واحدة، كلها في كربلاء.",
    heroCta: "تصفّح منتجاتنا",
    heroSecondary: "تعرّف على الشركة",
    marketShare: "من إنتاج الدواجن في العراق",
    brandsTitle: "ثلاث علامات، معيار واحد",
    brandsBody: "كل منتج يمكن تتبّعه من المفقس حتى رف المتجر.",
    chainTitle: "نتحكم بكل مراحل الإنتاج",
    chainBody:
      "منذ عام 2021 بنينا الدورة الكاملة تحت سقف واحد، لنضمن فحص الجودة قبل أن يصل أي منتج إلى السوق.",
    featuredTitle: "من مطبخ بوادي",
    featuredBody: "أطباق جاهزة للطهي، مجمدة في ذروة طزاجتها.",
    allProducts: "عرض كل المنتجات",
    newsTitle: "آخر الأخبار",
    allNews: "كل الأخبار",
    promiseTitle: "ما نضعه في كل عبوة",
  },
  chain: [
    { value: "322M", label: "بيضة تفقيس سنوياً", detail: "تنتج 257 مليون فرخ لاحم" },
    { value: "960", label: "قاعة تربية", detail: "في 60 مزرعة، 280 مليون طير سنوياً" },
    { value: "5", label: "مجازر حديثة", detail: "بطاقة 748,000 دجاجة يومياً" },
    { value: "325,000", label: "طن من الدواجن سنوياً", detail: "دجاج كامل وقطعيات ومصنعات" },
  ],
  promises: [
    { image: "/media/badge-halal.png", title: "حلال 100%", body: "ذبح وفق أحكام الشريعة الإسلامية بالكامل." },
    { image: "/media/badge-free-range.png", title: "تربية بعناية", body: "قطعان صحية بإجراءات أمن حيوي صارمة في مزارعنا." },
    { image: "/media/badge-natural.png", title: "طبيعي", body: "دجاج طازج بلا أي إضافات." },
    { image: "/media/badge-quality.png", title: "جودة تبني الثقة", body: "نظام إدارة جودة شامل في كل منشآتنا." },
  ],
  categories: {
    alrayan: {
      name: "الريان",
      kind: "دجاج طازج",
      body: "دجاج كامل وقطعيات مبرّدة، تصل طازجة يومياً إلى الأسواق في أنحاء العراق.",
    },
    bawadi: {
      name: "بوادي",
      kind: "دجاج مجمد",
      body: "دجاج كامل وقطعيات، يُجمَّد بسرعة ليحافظ على طزاجته ونكهته.",
    },
    "bawadi-factories": {
      name: "مصنعات بوادي",
      kind: "مصنعات الدجاج",
      body: "ناجتس وبرجر وستربس وغيرها، جاهزة للطهي في المنزل.",
    },
  },
  products: {
    title: "منتجاتنا",
    intro: "دجاج طازج ومجمد وجاهز للطهي من علامات سما كربلاء الثلاث.",
    all: "الكل",
    count: (n: number) => `${n} منتج`,
    specs: { weight: "الوزن", packaging: "التعبئة", shelfLife: "الصلاحية", pieces: "المحتوى" },
    related: "المزيد من",
    back: "كل المنتجات",
    inquire: "استفسر عن هذا المنتج",
    brand: "العلامة",
  },
  about: {
    title: "من نحن",
    lead: "مستقبل مستدام تلتقي فيه التكنولوجيا المتقدمة بالأمن الغذائي الموثوق.",
    vision:
      "نسعى لأن نكون نموذجاً رائداً في العراق والشرق الأوسط في إنتاج لحوم الدواجن ومشتقاتها، بالجمع بين أحدث التقنيات العالمية والممارسات المستدامة، لتقديم غذاء آمن وصحي وعالي الجودة يلبي احتياجات الأسواق المحلية والإقليمية.",
    storyTitle: "من نحن",
    story: [
      "شركة سما كربلاء شركة مساهمة خاصة عراقية تأسست عام 2021. تدرك الشركة احتياجات المستهلك العراقي، لذا كان هدفها منذ التأسيس تلبية هذه الاحتياجات بمنتجات عالية الجودة تتوافق مع أعلى المعايير الصحية العالمية.",
      "تُذبح منتجاتنا وفقاً لأحكام الشريعة الإسلامية وتُحضَّر بأحدث التقنيات. ونتحكم بجميع مراحل إنتاج الدواجن، من بيض التفقيس إلى المنتج النهائي وآلية توزيعه في السوق العراقية.",
    ],
    scaleTitle: "حجمنا بالأرقام",
    scale: [
      { value: "960", label: "قاعة تربية", detail: "في 60 مزرعة، تنتج أكثر من 280 مليون طير سنوياً بإجراءات أمن حيوي متقدمة." },
      { value: "325,000", label: "طن من لحوم الدواجن", detail: "سنوياً وفق المعايير المحلية والدولية." },
      { value: "322M", label: "بيضة تفقيس", detail: "سنوياً، تنتج 257 مليون فرخ لاحم لاستدامة الدورة." },
      { value: "5", label: "مجازر حديثة", detail: "بطاقة إجمالية تبلغ 748,000 دجاجة يومياً." },
      { value: "112,000", label: "طن من القطعيات", detail: "سنوياً، بتشكيلة واسعة تناسب كل مطبخ." },
      { value: "54,000", label: "طن من المصنعات", detail: "سنوياً: برجر وناجتس ونقانق وغيرها." },
      { value: "4,100+", label: "موظف", detail: "يعملون بمهنية وكفاءة وروح الفريق." },
      { value: "25–30%", label: "من دواجن العراق", detail: "حصتنا من إنتاج الدواجن في البلاد." },
    ],
    communityTitle: "الموهبة المحلية والمشاركة المجتمعية",
    community: [
      "نساهم في تدريب المهندسين العراقيين وخريجي الجامعات العراقية، ونشارك في مختلف الفعاليات الاجتماعية التي تساهم في تنمية المجتمع المحلي.",
      "منذ عام 2023 نوزّع منتجاتنا في السوق المحلية، ونعتمد نظام إدارة الجودة الشاملة في جميع مراحل الإنتاج وفي جميع مرافق الشركة.",
    ],
    glanceTitle: "السلامة والجودة وروح الفريق",
    glance:
      "بفريق يضم أكثر من 4,100 موظف، نلتزم بالسلامة الصناعية والحفاظ على العاملين وجودة المنتج والعمل الجماعي في جميع أنشطة الشركة.",
  },
  news: {
    title: "الأخبار",
    intro: "آخر المستجدات من سما كربلاء ومجموعة الاتحاد.",
    readMore: "اقرأ المقال",
    back: "كل الأخبار",
    more: "أخبار أخرى",
    watch: "شاهد الفيديو",
  },
  gallery: {
    title: "المعرض",
    intro: "من داخل مزارعنا ومصانعنا وأسطولنا.",
    close: "إغلاق",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
  },
  contactPage: {
    title: "تواصل معنا",
    intro: "لديك سؤال عن منتجاتنا أو التوزيع أو الشراكات؟ يسعدنا مساعدتك.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    address: "العنوان",
    formTitle: "أرسل لنا رسالة",
    name: "الاسم",
    emailField: "بريدك الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال الرسالة",
    sendNote: "سيفتح تطبيق البريد لديك والرسالة جاهزة للإرسال.",
    directions: "احصل على الاتجاهات",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    explore: "تصفّح",
    reach: "تواصل معنا",
  },
  notFound: {
    title: "لم نجد هذه الصفحة",
    body: "ربما نُقلت عند إعادة بناء الموقع. جرّب الصفحة الرئيسية أو تصفّح منتجاتنا.",
    home: "العودة إلى الرئيسية",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (lang: Locale) => dictionaries[lang];
