import { ServiceOfferService } from './service-offer.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { NoThankYouComponent } from '../../shared/no-thank-you.component.js';
import { DynamicTestimonialsComponent } from '../../shared/dynamic-testimonials.component.js';
import { DynamicVideoTestimonialsComponent } from '../../shared/dynamic-video-testimonials.component.js';
import { CaseStudiesGalleryComponent } from '../../shared/case-studies-gallery.component.js';
import { CaseStudyComponent } from '../../shared/case-study.component.js';
import { WebinarComponent } from '../../shared/webinar.component.js';

export class ServiceOfferPage {
    constructor(pageConfig) {
        this.service = new ServiceOfferService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 2. Offer Card
        const offer = this.data.offer;
        const offerCard = document.createElement('div');
        offerCard.className = "max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-2xl border-t border-indigo-500/20 relative overflow-hidden";
        
        const includesHTML = offer.includes ? `
            <ul class="space-y-3 mb-8 border-t border-white/10 pt-8 mt-8">
                ${offer.includes.map(item => `
                    <li class="flex items-start text-slate-300">
                        <svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        ` : '';

        const turnaroundHTML = offer.turnaround ? `
            <div class="grid grid-cols-2 gap-4 mb-8 bg-slate-800/50 p-4 rounded-lg border border-white/5">
                <div>
                    <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Build Time</span>
                    <span class="font-bold text-white">${offer.turnaround.build}</span>
                </div>
                <div>
                    <span class="block text-xs text-slate-500 uppercase tracking-wider mb-1">Revisions</span>
                    <span class="font-bold text-white">${offer.turnaround.revisions}</span>
                </div>
            </div>
        ` : '';

        offerCard.innerHTML = `
            <div class="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div class="relative">
                <h2 class="text-3xl font-bold text-white mb-2 text-center">${this.data.title}</h2>
                <div class="text-center mb-8">
                    <div class="text-4xl font-bold text-white text-gradient mb-2">${offer.priceDisplay}</div>
                    <p class="text-slate-400 text-sm">Monthly subscription + One-time setup</p>
                </div>

                ${turnaroundHTML}
                ${includesHTML}

                <a href="${offer.primaryCta.checkoutUrl}" target="_blank" class="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:-translate-y-1 transition-all transform">
                    ${offer.primaryCta.label}
                </a>
                
                <p class="text-center text-xs text-slate-500 mt-4">Secure checkout via Zylvie</p>
            </div>
        `;
        
        container.appendChild(offerCard);

        // 2.4 Case Studies Gallery (Above Dynamic Testimonials)
        const gallery = new CaseStudiesGalleryComponent("Our Portfolio");
        container.appendChild(gallery.render());

        // 2.5 Dynamic Testimonials
        const dynamicTestimonials = new DynamicTestimonialsComponent();
        container.appendChild(dynamicTestimonials.render());

        // 2.6 Dynamic Video Testimonials
        const dynamicVideoTestimonials = new DynamicVideoTestimonialsComponent();
        container.appendChild(dynamicVideoTestimonials.render());

        // 2.7 Featured Case Study
        const caseStudy = new CaseStudyComponent();
        container.appendChild(caseStudy.render());

        // 2.8 Webinar
        const webinar = new WebinarComponent();
        container.appendChild(webinar.render());

        // 3. No Thank You
        if (this.data.noThankYou) {
            const footer = new NoThankYouComponent(this.data.noThankYou);
            container.appendChild(footer.render());
        }

        return container;
    }
}