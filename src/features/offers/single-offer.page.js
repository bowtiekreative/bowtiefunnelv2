import { OfferService } from './offer.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { NoThankYouComponent } from '../../shared/no-thank-you.component.js';
import { CourseListComponent } from './components/course-list.js';
import { CurriculumComponent } from './components/curriculum.js';
import { FeatureGridComponent } from './components/feature-grid.js';
import { InstructorComponent } from './components/instructor.js';
import { FAQComponent } from './components/faq.js';
import { CountdownComponent } from '../application/components/countdown.js';
import { TestimonialComponent } from './components/testimonials.js';
import { DynamicTestimonialsComponent } from '../../shared/dynamic-testimonials.component.js';
import { DynamicVideoTestimonialsComponent } from '../../shared/dynamic-video-testimonials.component.js';
import { CaseStudyComponent } from '../../shared/case-study.component.js';
import { WebinarComponent } from '../../shared/webinar.component.js';
import { BonusComponent } from '../application/components/bonus.js';

export class SingleOfferPage {
    constructor(pageConfig) {
        this.service = new OfferService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 2. Single Offer Card
        const offer = this.data.offer;
        
        // Prepare Countdown HTML if it exists (to inject inside card)
        let countdownHTML = '';
        if (this.data.countdown) {
            const countdown = new CountdownComponent(this.data.countdown, this.data.id);
            const el = countdown.render();
            // Remove huge margins for inside-card context
            el.classList.remove('my-12');
            el.classList.add('mt-8', 'mb-2');
            countdownHTML = el.outerHTML;
        }

        const offerCard = document.createElement('div');
        offerCard.className = "max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-2xl border-t border-indigo-500/20 relative overflow-hidden mb-16";
        
        const includesHTML = offer.includes ? `
            <ul class="space-y-3 mb-8">
                ${offer.includes.map(item => `
                    <li class="flex items-start text-slate-300">
                        <svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        ` : '';

        // Book specific sections
        const sectionsHTML = this.data.sections ? `
             <div class="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                ${this.data.sections.map(s => `<div class="text-xs text-slate-500 uppercase tracking-wider font-semibold">${s}</div>`).join('')}
             </div>
        ` : '';

        offerCard.innerHTML = `
            <div class="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>
            <div class="relative">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-white/10">
                    <div>
                        <h2 class="text-2xl font-bold text-white mb-2">${offer.name}</h2>
                        <p class="text-slate-400 text-sm">${offer.positioning || 'Instant Access'}</p>
                    </div>
                    <div class="text-4xl font-bold text-white mt-4 md:mt-0">${offer.priceDisplay}</div>
                </div>
                
                ${includesHTML}

                <a href="${offer.primaryCta.checkoutUrl || offer.primaryCta.applicationUrl}" target="_blank" class="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 hover:-translate-y-1 transition-all transform">
                    ${offer.primaryCta.label}
                </a>
                
                ${countdownHTML}

                ${sectionsHTML}
            </div>
        `;
        
        container.appendChild(offerCard);

        // 3. Bonuses (New)
        if (this.data.bonuses) {
            const bonuses = new BonusComponent(this.data.bonuses);
            container.appendChild(bonuses.render());
        }

        // 4. Course List / Topics
        if (this.data.topics) {
            const topics = new FeatureGridComponent("What's Inside", this.data.topics);
            container.appendChild(topics.render());
        } else if (this.data.courses) {
            const courses = new CourseListComponent("What You Get", this.data.courses);
            container.appendChild(courses.render());
        }

        // 5. Playbooks / Curriculum
        if (this.data.playbooks) {
            const playbooksContainer = document.createElement('div');
            playbooksContainer.className = "max-w-4xl mx-auto mt-16";
            playbooksContainer.innerHTML = `
                <h2 class="text-3xl font-bold text-white text-center mb-4">${this.data.playbooks.title}</h2>
                <p class="text-slate-400 text-center mb-10 max-w-2xl mx-auto">${this.data.playbooks.description}</p>
                <div class="glass-panel p-8 rounded-2xl border border-white/5">
                    <div class="flex flex-wrap gap-3 justify-center">
                        ${this.data.playbooks.items.map(item => `
                            <span class="px-4 py-2 bg-slate-800/50 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/20">${item}</span>
                        `).join('')}
                    </div>
                </div>
            `;
            container.appendChild(playbooksContainer);
        } else if (this.data.curriculum) {
            const curriculum = new CurriculumComponent("Curriculum", this.data.curriculum);
            container.appendChild(curriculum.render());
        }

        // 6. Benefits (Feature Grid)
        if (this.data.benefits) {
            const benefits = new FeatureGridComponent("Why This Book is Different", this.data.benefits);
            container.appendChild(benefits.render());
        }

        // 7. Outcomes (Feature Grid)
        if (this.data.outcomes) {
            const outcomes = new FeatureGridComponent("What You'll Discover", this.data.outcomes);
            container.appendChild(outcomes.render());
        }

        // 8. Instructor
        if (this.data.instructor) {
            const instructor = new InstructorComponent(this.data.instructor);
            container.appendChild(instructor.render());
        }

        // 9. Testimonials (New)
        if (this.data.testimonials) {
            const testimonials = new TestimonialComponent("What Readers & Audiences Say", this.data.testimonials);
            container.appendChild(testimonials.render());
        }

        // 9.5 Dynamic Testimonials (Social Proof)
        const dynamicTestimonials = new DynamicTestimonialsComponent();
        container.appendChild(dynamicTestimonials.render());

        // 9.6 Dynamic Video Testimonials
        const dynamicVideoTestimonials = new DynamicVideoTestimonialsComponent();
        container.appendChild(dynamicVideoTestimonials.render());

        // 9.7 Featured Case Study
        const caseStudy = new CaseStudyComponent();
        container.appendChild(caseStudy.render());

        // 9.8 Webinar
        const webinar = new WebinarComponent();
        container.appendChild(webinar.render());

        // 10. FAQ
        if (this.data.faqs) {
            const faqSection = new FAQComponent(this.data.faqs);
            container.appendChild(faqSection.render());
        }

        // 11. Bottom CTA
        if (this.data.offer) {
             const bottomCta = document.createElement('div');
             bottomCta.className = "text-center mt-24 mb-12";
             bottomCta.innerHTML = `
                <h3 class="text-2xl font-bold text-white mb-4">Ready to Crack the Code?</h3>
                <p class="text-slate-400 mb-8">Get the raw, uncensored truth about what makes content go viral.</p>
                <a href="${offer.primaryCta.checkoutUrl}" target="_blank" class="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-4 px-12 rounded-xl shadow-lg shadow-indigo-500/20 hover:-translate-y-1 transition-all transform">
                    ${offer.primaryCta.label}
                </a>
                ${this.data.disclaimer ? `<div class="mt-8 max-w-lg mx-auto border-t border-white/5 pt-8"><p class="text-slate-500 text-xs leading-relaxed">${this.data.disclaimer}</p></div>` : ''}
             `;
             container.appendChild(bottomCta);
        }

        // 12. No Thank You
        if (this.data.noThankYou) {
            const footer = new NoThankYouComponent(this.data.noThankYou);
            container.appendChild(footer.render());
        }

        return container;
    }
}