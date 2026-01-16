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
  - **Index Page**: Grid view of project case studies.
  - **Detail Pages**: In-depth project breakdown with "Challenge/Solution/Outcome" structure.
  - **Integration**: Linked from global footer navigation.
  - **Content**: 5 high-fidelity case studies (Non-Profit, Travel, Dining, Music, Sports) with professional imagery.

## Functional Entry URIs
- **Home/Lead Magnet**: `index.html` (defaults to `?page=free_book_optin`)
- **Case Studies**: `index.html?page=case_studies_index`
- **Services**:
  - `index.html?page=website_plans_page`
  - `index.html?page=funnel_plans_page`
- **Offers**:
  - `index.html?page=viral_system_offer`
  - `index.html?page=vault_offer`

## Project Structure
- `src/core/`: Router and EventBus.
- `src/data/`: content configuration (`config.js`) and image mappings (`images.js`).
- `src/features/`: Page components organized by feature (case-studies, offers, etc.).
- `src/shared/`: Reusable components (Hero, Footer, etc.).

## Next Steps
- Implement "Category Filter" for Case Studies index if list grows.
- Add "Related Case Studies" section to detail pages.
- Connect contact forms to a real backend or service (e.g., Formspree/Netlify Forms).
