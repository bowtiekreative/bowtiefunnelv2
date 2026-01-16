import { funnelConfig } from '../data/config.js';
import { EventBus } from './event-bus.js';

// Import Page Components
import { LeadMagnetPage } from '../features/lead-magnet/lead-magnet.page.js';
import { SegmentationPage } from '../features/segmentation/segmentation.page.js';
import { DualOfferPage } from '../features/offers/dual-offer.page.js';
import { SingleOfferPage } from '../features/offers/single-offer.page.js';
import { ApplicationPage } from '../features/application/application.page.js';
import { ServiceListingPage } from '../features/services/service-listing.page.js';
import { ServiceOfferPage } from '../features/services/service-offer.page.js';
import { LegalPage } from '../features/legal/legal.page.js';
import { FooterComponent } from '../shared/footer.component.js';
import { CookieConsentComponent } from '../shared/cookie-consent.component.js';
import { CaseStudiesPage } from '../features/case-studies/case-studies.page.js';
import { CaseStudyDetailPage } from '../features/case-studies/case-study-detail.page.js';

export class Router {
    constructor(appContainerId) {
        this.appContainer = document.getElementById(appContainerId);
        this.config = funnelConfig;
        
        EventBus.on('navigate', (pageId) => this.navigateTo(pageId));
        
        // Handle Back/Forward
        window.addEventListener('popstate', (event) => {
             if (event.state && event.state.pageId) {
                this.renderPage(event.state.pageId);
            } else {
                this.renderPage(this.config.startPageId);
            }
        });
    }

    init() {
        const urlParams = new URLSearchParams(window.location.search);
        const pageParam = urlParams.get('page');
        
        if (pageParam && this.config.pages[pageParam]) {
             this.renderPage(pageParam);
        } else {
            this.renderPage(this.config.startPageId);
        }
    }

    navigateTo(pageId) {
        if (!this.config.pages[pageId]) {
            console.error(`Page ID ${pageId} not found.`);
            return;
        }
        
        // Handle anchor link actions (e.g. scroll_to_plans)
        // If the action isn't a direct page load but internal logic, we might need to handle it.
        // But the previous implementation assumed navigateTo changes the URL.
        // Let's assume standard page navigation.
        
        window.history.pushState({ pageId: pageId }, '', `?page=${pageId}`);
        this.renderPage(pageId);
        window.scrollTo(0, 0);
    }

    renderPage(pageId) {
        const pageConfig = this.config.pages[pageId];
        this.appContainer.innerHTML = ''; 
        
        let pageComponent;

        switch(pageConfig.type) {
            case 'lead_magnet':
                pageComponent = new LeadMagnetPage(pageConfig);
                break;
            case 'thank_you_segmentation':
                pageComponent = new SegmentationPage(pageConfig);
                break;
            case 'tripwire_dual_offer':
                pageComponent = new DualOfferPage(pageConfig);
                break;
            case 'course_offer':
            case 'bundle_offer':
            case 'book_offer':
            case 'low_ticket_ebook':
                pageComponent = new SingleOfferPage(pageConfig);
                break;
            case 'high_ticket_application':
            case 'live_workshop_application':
                pageComponent = new ApplicationPage(pageConfig);
                break;
            case 'service_listing':
                pageComponent = new ServiceListingPage(pageConfig);
                break;
            case 'service_offer':
                pageComponent = new ServiceOfferPage(pageConfig);
                break;
            case 'legal_page':
                pageComponent = new LegalPage(pageConfig);
                break;
            case 'case_studies_index':
                pageComponent = new CaseStudiesPage(pageConfig);
                break;
            case 'case_study_detail':
                pageComponent = new CaseStudyDetailPage(pageConfig);
                break;
            default:
                this.appContainer.innerHTML = `<div class="text-red-500">Unknown page type: ${pageConfig.type}</div>`;
                return;
        }

        const element = pageComponent.render();
        
        // Wrap in animation container
        const wrapper = document.createElement('div');
        wrapper.className = "min-h-screen flex flex-col items-center justify-between p-4 md:p-8 fade-enter";
        wrapper.innerHTML = `<div class="w-full max-w-5xl mx-auto space-y-12 flex-grow"></div>`;
        wrapper.firstElementChild.appendChild(element);

        // Append Footer
        const footer = new FooterComponent();
        wrapper.firstElementChild.appendChild(footer.render());

        this.appContainer.appendChild(wrapper);

        // Append Cookie Consent
        const cookieConsent = new CookieConsentComponent();
        this.appContainer.appendChild(cookieConsent.render());

        requestAnimationFrame(() => {
            wrapper.classList.add('fade-enter-active');
        });
    }
}