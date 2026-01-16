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
    "websites_hero": "images/funnel/website-windsor.jpg",
    "website_black_label": "images/funnel/website-black-label.jpg",
    "website_lite": "images/funnel/website-lite.jpg",
    "website_windsor": "images/funnel/website-windsor.jpg",
    "website_classic": "images/funnel/website-classic.jpg",
    "funnels_hero": "images/funnel/concierge-elite.jpg",
    "funnels_start": "images/funnel/concierge-start.jpg",
    "funnels_plus": "images/funnel/concierge-plus.jpg",
    "funnels_pro": "images/funnel/concierge-pro.jpg",
    "funnels_elite": "images/funnel/concierge-elite.jpg",
    "website_essentials_guide": "images/funnel/website-essentials-guide.jpg",
    "sales_funnel_ebook": "https://www.genspark.ai/api/files/s/bQeYIhtH",
    "case_studies_hero": "https://www.genspark.ai/api/files/s/DufRwW5I"
};

export const getImage = (key) => {
    return imageMap[key] || "https://placehold.co/800x600/1e293b/FFF?text=Image+Key+Missing";
};
