// Image Map for Placeholders
export const imageMap = {
    "free_book_cover": "images/funnel/free-book-cover.jpg",
    "inbox_illustration": "images/funnel/inbox-illustration.jpg",
    "audit_dashboard": "images/funnel/audit-dashboard.jpg",
    "viral_system_mockup": "images/funnel/viral-system-mockup.jpg",
    "vault_library": "images/funnel/vault-library.jpg",
    "brand_session": "images/funnel/brand-session.jpg",
    "brand_identity_book": "images/funnel/brand-identity-book.jpg",
    "done_for_you_team": "images/funnel/done-for-you-team.jpg",
    "three_day_workshop": "images/funnel/three-day-workshop.jpg",
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
    "sales_funnel_ebook": "images/funnel/sales-funnel-ebook.jpg",
    "case_studies_hero": "images/funnel/case-studies-hero.jpg"
};

export const getImage = (key) => {
    return imageMap[key] || "https://placehold.co/800x600/1e293b/FFF?text=Image+Key+Missing";
};
