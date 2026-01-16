# Website Revenue Funnel

## Completed Features
- **Core SPA Architecture**: Vanilla JS router with event bus and config-driven pages.
- **Funnel Pages**:
  - Lead Magnet (Free Book)
  - Segmentation/Quiz Pages
  - Tripwire Offers (Audit, Strategy Call)
  - Core Offers (Viral System, Vault, etc.)
  - High-Ticket Applications (Brand Workshop, Done-For-You)
  - Service Listings (Websites, Funnels)
  - Legal Pages
- **Case Studies Portfolio**:
  - **Embedded Gallery**: "Case Studies" gallery section added to all main funnel pages (Services, Offers, Applications) positioned above testimonials.
  - **Detail Pages**: In-depth project breakdown with "Challenge/Solution/Outcome" structure.
  - **Index Page**: "View All" destination for the full portfolio.
  - **Content**: Updated gallery with 31 high-quality case study images.
  - **Visuals**: Updated hero images for Website Plans and Funnel Programs pages with high-fidelity 3D box mockups.
  - **Products**: Replaced all individual product images for Website Plans (Lite, Classic, Windsor, Black Label) and Funnel Programs (Start, Plus, Pro, Elite) with 3D packaging visuals.
  - **Offers**: Updated hero images for all core offer pages (Viral System, Brand Identity, Free Book, Brand Workshop, Audit, SMU Book, Done-For-You, 3-Day Workshop, Sales Funnel Ebook) with new high-quality mockups.

## Functional Entry URIs
- **Home/Lead Magnet**: `index.html` (defaults to `?page=free_book_optin`)
- **Case Studies Index**: `index.html?page=case_studies_index`
- **Services (with Gallery)**:
  - `index.html?page=website_plans_page`
  - `index.html?page=funnel_plans_page`
- **Offers (with Gallery)**:
  - `index.html?page=viral_system_offer`
  - `index.html?page=vault_offer`

## Project Structure
- `src/core/`: Router and EventBus.
- `src/data/`: content configuration (`config.js`) and image mappings (`images.js`).
- `src/features/`: Page components organized by feature.
- `src/shared/`: Reusable components, including `CaseStudiesGalleryComponent`.

## Next Steps
- Connect contact forms to a real backend.
- Add "Related Case Studies" to detail pages.
