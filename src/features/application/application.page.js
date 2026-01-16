import { ApplicationService } from './application.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { NoThankYouComponent } from '../../shared/no-thank-you.component.js';
import { AgendaComponent } from './components/agenda.js';
import { DeliverablesComponent } from './components/deliverables.js';
import { FAQComponent } from '../offers/components/faq.js'; 
import { CountdownComponent } from './components/countdown.js';
import { BonusComponent } from './components/bonus.js';
import { DynamicTestimonialsComponent } from '../../shared/dynamic-testimonials.component.js';
import { DynamicVideoTestimonialsComponent } from '../../shared/dynamic-video-testimonials.component.js';
import { CaseStudiesGalleryComponent } from '../../shared/case-studies-gallery.component.js';
import { CaseStudyComponent } from '../../shared/case-study.component.js';
import { WebinarComponent } from '../../shared/webinar.component.js';

export class ApplicationPage {
    constructor(pageConfig) {
        this.service = new ApplicationService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 2. Application Layout
        const layout = document.createElement('div');
        layout.className = "grid lg:grid-cols-5 gap-12";

        const offer = this.data.offer;

        // Features list for the sidebar
        const featuresHTML = offer.features ? `
            <ul class="space-y-3 mb-6 border-b border-white/10 pb-6">
                ${offer.features.map(f => `
                    <li class="flex items-center text-slate-300 text-sm">
                        <svg class="w-4 h-4 text-emerald-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        ${f}
                    </li>
                `).join('')}
            </ul>
        ` : '';

        // Left Column (Sidebar)
        const leftColHTML = `
            <div class="glass-panel p-6 rounded-xl sticky top-8">
                <div class="text-sm text-indigo-400 font-bold uppercase tracking-wider mb-2">The Offer</div>
                <h3 class="text-xl font-bold text-white mb-2">${offer.name}</h3>
                <div class="text-3xl font-bold text-white mb-4">${offer.priceDisplay}</div>
                
                ${featuresHTML}

                <p class="text-slate-400 text-sm italic mb-4">${this.data.qualification.disclaimer}</p>
                
                <div class="p-4 bg-indigo-900/20 border border-indigo-500/20 rounded-lg">
                    <p class="text-indigo-300 text-xs font-semibold uppercase tracking-wide mb-1">Limited Availability</p>
                    <p class="text-white text-sm">Priority given to waitlist.</p>
                </div>
            </div>
        `;

        // Right Column (Form OR CTA Card)
        let rightColHTML = '';
        
        if (this.data.renderInlineForm === false) {
             const ctaCard = this.data.ctaCard || {};
             rightColHTML = `
                <div class="glass-panel p-12 rounded-2xl flex flex-col items-center justify-center text-center h-full border-t border-indigo-500/20">
                    <h3 class="text-2xl font-bold text-white mb-6">${ctaCard.title || 'Ready to Apply?'}</h3>
                    <p class="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto">
                        ${ctaCard.description || ''}
                    </p>
                    <button id="cta-apply-btn" class="w-full max-w-md bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:-translate-y-1 transform text-lg">
                        ${ctaCard.secondaryActionLabel || offer.primaryCta.label}
                    </button>
                    <p class="text-xs text-slate-500 mt-6">${this.data.qualification.urgencyText || ''}</p>
                </div>
             `;
        } else {
            const questionsHTML = this.data.qualification.questions.map((q) => `
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">${q}</label>
                    <input type="text" class="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                </div>
            `).join('');

            rightColHTML = `
                <form class="glass-panel p-8 rounded-2xl space-y-6">
                    <h3 class="text-xl font-semibold text-white mb-4">Application details</h3>
                    ${questionsHTML}
                    <button type="submit" class="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-indigo-500/20">
                        ${offer.primaryCta.label}
                    </button>
                    <p class="text-center text-xs text-slate-500 mt-4">${this.data.qualification.urgencyText || ''}</p>
                </form>
            `;
        }

        layout.innerHTML = `
            <div class="lg:col-span-2 space-y-6">${leftColHTML}</div>
            <div class="lg:col-span-3" id="app-right-col">${rightColHTML}</div>
        `;

        // 3. Countdown (Conditional) - Injected into right column above CTA
        if (this.data.countdown) {
            const countdown = new CountdownComponent(this.data.countdown, this.data.id);
            const countdownEl = countdown.render();
            // Adjust styling for column context
            countdownEl.classList.remove('my-12'); 
            countdownEl.classList.add('mb-8');
            
            const rightCol = layout.querySelector('#app-right-col');
            if (rightCol) {
                rightCol.prepend(countdownEl);
            }
        }

        // Attach Listeners
        if (this.data.renderInlineForm === false) {
            const btn = layout.querySelector('#cta-apply-btn');
            if (btn) {
                btn.onclick = () => window.open(offer.primaryCta.applicationUrl, '_blank');
            }
        } else {
             const form = layout.querySelector('form');
             if (form) {
                form.onsubmit = (e) => {
                    e.preventDefault();
                    window.open(offer.primaryCta.applicationUrl, '_blank');
                };
             }
        }

        container.appendChild(layout);

        // 3. Countdown (Conditional) - Moved to right column above
        // if (this.data.countdown) { ... }

        // 4. Bonuses (New)
        if (this.data.bonuses) {
            const bonuses = new BonusComponent(this.data.bonuses);
            container.appendChild(bonuses.render());
        }

        // 5. Agenda
        if (this.data.agenda) {
            const agenda = new AgendaComponent(this.data.agenda);
            const titleEl = agenda.render().querySelector('h2');
            if(titleEl && this.data.agendaTitle) titleEl.textContent = this.data.agendaTitle;
            
            container.appendChild(agenda.render());
        }

        // 6. Deliverables
        if (this.data.deliverables) {
            const title = this.data.deliverablesTitle || "What You Will Receive";
            const deliverables = new DeliverablesComponent(title, this.data.deliverables);
            container.appendChild(deliverables.render());
        }

        // 7. Audience
        if (this.data.audience) {
            const title = this.data.audienceTitle || "Who This Is For";
            const audience = new DeliverablesComponent(title, this.data.audience);
            container.appendChild(audience.render());
        }

        // 7.4 Case Studies Gallery (Above Dynamic Testimonials)
        const gallery = new CaseStudiesGalleryComponent("Success Stories");
        container.appendChild(gallery.render());

        // 7.5 Dynamic Testimonials
        const dynamicTestimonials = new DynamicTestimonialsComponent();
        container.appendChild(dynamicTestimonials.render());

        // 7.6 Dynamic Video Testimonials
        const dynamicVideoTestimonials = new DynamicVideoTestimonialsComponent();
        container.appendChild(dynamicVideoTestimonials.render());

        // 7.7 Featured Case Study
        const caseStudy = new CaseStudyComponent();
        container.appendChild(caseStudy.render());

        // 7.8 Webinar
        const webinar = new WebinarComponent();
        container.appendChild(webinar.render());

        // 8. FAQ
        if (this.data.faqs) {
            const faqSection = new FAQComponent(this.data.faqs);
            container.appendChild(faqSection.render());
        }

        // 9. No Thank You
        if (this.data.noThankYou) {
            const footer = new NoThankYouComponent(this.data.noThankYou);
            container.appendChild(footer.render());
        }

        return container;
    }
}