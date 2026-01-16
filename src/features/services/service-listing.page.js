import { ServiceListingService } from './service-listing.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { IntroSectionComponent } from './components/intro-section.js';
import { PlansGridComponent } from './components/plans-grid.js';
import { FitSectionComponent } from './components/fit-section.js';
import { CtaBlockComponent } from './components/cta-block.js';
import { CountdownComponent } from '../application/components/countdown.js';
import { BonusComponent } from '../application/components/bonus.js';
import { DynamicTestimonialsComponent } from '../../shared/dynamic-testimonials.component.js';
import { DynamicVideoTestimonialsComponent } from '../../shared/dynamic-video-testimonials.component.js';
import { CaseStudyComponent } from '../../shared/case-study.component.js';
import { WebinarComponent } from '../../shared/webinar.component.js';

export class ServiceListingPage {
    constructor(pageConfig) {
        this.service = new ServiceListingService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 2. Intro
        if (this.data.intro) {
            const intro = new IntroSectionComponent(this.data.intro);
            container.appendChild(intro.render());
        }

        // 2.5 Bonus & Countdown
        if (this.data.bonuses) {
            const bonuses = new BonusComponent(this.data.bonuses);
            const el = bonuses.render();
            el.classList.add('mb-12');
            container.appendChild(el);
        }

        if (this.data.countdown) {
            const countdown = new CountdownComponent(this.data.countdown, this.data.id);
            const el = countdown.render();
            el.classList.remove('my-12');
            el.classList.add('mb-12');
            container.appendChild(el);
        }

        // 3. Plans Grid
        if (this.data.plans) {
            const plans = new PlansGridComponent(this.data.plans);
            container.appendChild(plans.render());
        }

        // 4. Fit Section
        if (this.data.fitSection) {
            const fit = new FitSectionComponent(this.data.fitSection);
            container.appendChild(fit.render());
        }

        // 5. Bottom CTA
        if (this.data.ctaBlock) {
            // 5.5 Testimonials before final CTA
            const dynamicTestimonials = new DynamicTestimonialsComponent();
            container.appendChild(dynamicTestimonials.render());

            const dynamicVideoTestimonials = new DynamicVideoTestimonialsComponent();
            container.appendChild(dynamicVideoTestimonials.render());

            const caseStudy = new CaseStudyComponent();
            container.appendChild(caseStudy.render());

            const webinar = new WebinarComponent();
            container.appendChild(webinar.render());

            const cta = new CtaBlockComponent(this.data.ctaBlock);
            container.appendChild(cta.render());
        }

        // 6. Workshop Promo
        if (this.data.workshopPromo) {
            const workshop = new CtaBlockComponent(this.data.workshopPromo);
            container.appendChild(workshop.render());
        }

        return container;
    }
}