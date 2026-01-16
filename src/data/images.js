// Image Map for Placeholders
export const imageMap = {
    "free_book_cover": "https://www.genspark.ai/api/files/s/sZ6i385f",
    "inbox_illustration": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    "audit_dashboard": "https://www.genspark.ai/api/files/s/C2bdFlU5",
    "viral_system_mockup": "https://www.genspark.ai/api/files/s/F1sQ0yYr",
    "vault_library": "https://www.genspark.ai/api/files/s/NrWKFxpU",
    "brand_session": "https://www.genspark.ai/api/files/s/GpwxKTze",
    "brand_identity_book": "https://www.genspark.ai/api/files/s/gY588tIC",
    "done_for_you_team": "https://www.genspark.ai/api/files/s/AegoHaW5",
    "three_day_workshop": "https://www.genspark.ai/api/files/s/7V0rokxa",
    "unlimited_design": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    "brand_book": "https://images.unsplash.com/photo-1507842217343-583bb7260b66?auto=format&fit=crop&q=80&w=800",
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
    "website_essentials_guide": "https://www.genspark.ai/api/files/s/JYwFRFfc",
    "sales_funnel_ebook": "https://www.genspark.ai/api/files/s/bQeYIhtH",
    "case_studies_hero": "https://www.genspark.ai/api/files/s/TlcF9l85"
};

export const getImage = (key) => {
    return imageMap[key] || "https://placehold.co/800x600/1e293b/FFF?text=Image+Key+Missing";
};