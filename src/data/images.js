// Image Map for Placeholders
export const imageMap = {
    "free_book_cover": "https://www.genspark.ai/api/files/s/sZ6i385f",
    "inbox_illustration": "images/funnel/inbox-illustration.jpg",
    "audit_dashboard": "https://www.genspark.ai/api/files/s/C2bdFlU5",
    "viral_system_mockup": "https://www.genspark.ai/api/files/s/F1sQ0yYr",
    "vault_library": "images/funnel/vault-library.jpg",
    "brand_session": "https://www.genspark.ai/api/files/s/GpwxKTze",
    "brand_identity_book": "https://www.genspark.ai/api/files/s/gY588tIC",
    "done_for_you_team": "https://www.genspark.ai/api/files/s/AegoHaW5",
    "three_day_workshop": "https://www.genspark.ai/api/files/s/ut5BUrHm",
    "unlimited_design": "images/funnel/unlimited-design.jpg",
    "brand_book": "images/funnel/brand-book.jpg",
    "smu_book_cover": "https://www.genspark.ai/api/files/s/AqNPxHsu",
    "websites_hero": "https://www.genspark.ai/api/files/s/SZHzHMnr",
    "website_black_label": "https://www.genspark.ai/api/files/s/pymHiPFs",
    "website_lite": "https://www.genspark.ai/api/files/s/PHCdxUTY",
    "website_windsor": "https://www.genspark.ai/api/files/s/DSAAJECJ",
    "website_classic": "https://www.genspark.ai/api/files/s/R3iqjTw8",
    "funnels_hero": "https://www.genspark.ai/api/files/s/fsocp9nq",
    "funnels_start": "https://www.genspark.ai/api/files/s/ye0dZakT",
    "funnels_plus": "https://www.genspark.ai/api/files/s/OsC2qwqk",
    "funnels_pro": "https://www.genspark.ai/api/files/s/MZG8ldKL",
    "funnels_elite": "https://www.genspark.ai/api/files/s/klQUvOyF",
    "website_essentials_guide": "images/funnel/website-essentials-guide.jpg",
    "sales_funnel_ebook": "https://www.genspark.ai/api/files/s/bQeYIhtH",
    "case_studies_hero": "images/funnel/case-studies-hero.jpg"
};

export const getImage = (key) => {
    return imageMap[key] || "https://placehold.co/800x600/1e293b/FFF?text=Image+Key+Missing";
};
