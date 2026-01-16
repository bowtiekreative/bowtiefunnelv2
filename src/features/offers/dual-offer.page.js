import { OfferService } from './offer.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { NoThankYouComponent } from '../../shared/no-thank-you.component.js';
import { FeatureGridComponent } from './components/feature-grid.js';
import { FAQComponent } from './components/faq.js';
import { BonusComponent } from '../application/components/bonus.js';
import { CountdownComponent } from '../application/components/countdown.js';
import { DynamicTestimonialsComponent } from '../../shared/dynamic-testimonials.component.js';
import { DynamicVideoTestimonialsComponent } from '../../shared/dynamic-video-testimonials.component.js';
import { CaseStudiesGalleryComponent } from '../../shared/case-studies-gallery.component.js';
import { CaseStudyComponent } from '../../shared/case-study.component.js';
import { WebinarComponent } from '../../shared/webinar.component.js';

export class DualOfferPage {
    constructor(pageConfig) {
        this.service = new OfferService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 1.5 Countdown
        if (this.data.countdown) {
            const countdown = new CountdownComponent(this.data.countdown, this.data.id);
            const countdownEl = countdown.render();
            // Style tweak to fit this page better if needed, otherwise default is fine
            container.appendChild(countdownEl);
        }

        // 1.6 Bonuses
        if (this.data.bonuses) {
            const bonus = new BonusComponent(this.data.bonuses);
            const bonusEl = bonus.render();
            // Style tweak: ensure it has some spacing
            bonusEl.classList.add('max-w-4xl', 'mx-auto', 'mb-8'); 
            container.appendChild(bonusEl);
        }

        // 2. Dual Offers
        const offersContainer = document.createElement('div');
        offersContainer.className = "grid md:grid-cols-2 gap-8 max-w-4xl mx-auto";

        this.data.offers.forEach((offer, idx) => {
            const isRecommended = idx === 1;
            const card = document.createElement('div');
            card.className = `relative glass-panel p-8 rounded-2xl flex flex-col ${isRecommended ? 'border-indigo-500/30 shadow-indigo-500/10 shadow-2xl' : ''} overflow-hidden`;
            
            const imageHTML = offer.image ? `
                <div class="mb-6 -mx-8 -mt-8 h-48 overflow-hidden relative">
                    <img src="${offer.image}" alt="${offer.name}" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
            ` : '';

            const includesHTML = offer.includes ? `
                <ul class="space-y-3 mb-8 mt-6">
                    ${offer.includes.map(item => `
                        <li class="flex items-start text-slate-300 text-sm">
                            <svg class="w-4 h-4 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            ` : '';

            const tag = offer.tag || (isRecommended ? 'Recommended' : null);

            card.innerHTML = `
                ${tag ? `<div class="absolute top-4 right-4 z-10 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">${tag}</div>` : ''}
                
                ${imageHTML}

                <h3 class="text-2xl font-bold text-white mb-2">${offer.name}</h3>
                <div class="text-3xl font-bold text-indigo-400 mb-2">${offer.priceDisplay}</div>
                <p class="text-slate-400 text-sm mb-4 min-h-[40px]">${offer.description}</p>
                
                <a href="${offer.primaryCta.checkoutUrl}" target="_blank" class="w-full text-center block ${isRecommended ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'} font-semibold py-3 rounded-lg transition-colors">
                    ${offer.primaryCta.label}
                </a>

                ${includesHTML}
            `;
            offersContainer.appendChild(card);
        });
        
        container.appendChild(offersContainer);

        // 3. Features (What this audit finds)
        if (this.data.features) {
            const featureGrid = new FeatureGridComponent("What this audit finds", this.data.features);
            container.appendChild(featureGrid.render());
        }

        // 4. Outcomes (You'll know exactly what to do next)
        if (this.data.outcomes) {
            const outcomeGrid = new FeatureGridComponent("You'll know exactly what to do next", this.data.outcomes);
            container.appendChild(outcomeGrid.render());
        }

        // 4.4 Case Studies Gallery (Above Dynamic Testimonials)
        const gallery = new CaseStudiesGalleryComponent("Recent Audits & Work");
        container.appendChild(gallery.render());

        // 4.5 Dynamic Testimonials
        const dynamicTestimonials = new DynamicTestimonialsComponent();
        container.appendChild(dynamicTestimonials.render());

        // 4.6 Dynamic Video Testimonials
        const dynamicVideoTestimonials = new DynamicVideoTestimonialsComponent();
        container.appendChild(dynamicVideoTestimonials.render());

        // 4.7 Featured Case Study
        const caseStudy = new CaseStudyComponent();
        container.appendChild(caseStudy.render());

        // 4.8 Webinar
        const webinar = new WebinarComponent();
        container.appendChild(webinar.render());

        // 5. FAQ
        if (this.data.faqs) {
            const faqSection = new FAQComponent(this.data.faqs);
            container.appendChild(faqSection.render());
        }

        // 6. No Thank You
        if (this.data.noThankYou) {
            const footer = new NoThankYouComponent(this.data.noThankYou);
            container.appendChild(footer.render());
        }

        return container;
    }
}