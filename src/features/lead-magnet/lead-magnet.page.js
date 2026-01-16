import { LeadMagnetService } from './lead-magnet.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { NoThankYouComponent } from '../../shared/no-thank-you.component.js';
import { OptinFormComponent } from './components/optin-form.js';
import { FeaturesListComponent } from './components/features-list.js';
import { InfoFooterComponent } from './components/info-footer.js';
import { BonusComponent } from '../application/components/bonus.js';
import { CountdownComponent } from '../application/components/countdown.js';

export class LeadMagnetPage {
    constructor(pageConfig) {
        this.service = new LeadMagnetService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // Wrapper for the content column (Features + Form + Footer)
        const contentCol = document.createElement('div');
        contentCol.className = "max-w-xl mx-auto";

        // 3. Features List
        if (this.data.features) {
            const features = new FeaturesListComponent(this.data.features);
            contentCol.appendChild(features.render());
        }

        // 4. Bonuses (Restored & Placed Above CTA)
        if (this.data.bonuses) {
            const bonus = new BonusComponent(this.data.bonuses);
            const bonusEl = bonus.render();
            // Style tweaks for lead magnet layout (compact)
            bonusEl.classList.remove('mt-16');
            bonusEl.classList.add('mt-8', 'mb-4'); 
            contentCol.appendChild(bonusEl);
        }

        // 4.5 Countdown (Placed Above CTA)
        if (this.data.countdown) {
            const countdown = new CountdownComponent(this.data.countdown, this.data.id);
            const countdownEl = countdown.render();
            // Adjust styling for this context
            countdownEl.classList.remove('my-12');
            countdownEl.classList.add('mb-8');
            contentCol.appendChild(countdownEl);
        }

        // 5. Optin Form
        const form = new OptinFormComponent(this.data.primaryCta);
        contentCol.appendChild(form.render());

        // 6. Info Footer (Tagline/Desc)
        if (this.data.footer) {
            const infoFooter = new InfoFooterComponent(this.data.footer);
            contentCol.appendChild(infoFooter.render());
        }

        // 7. No Thank You
        if (this.data.noThankYou) {
            const footer = new NoThankYouComponent(this.data.noThankYou);
            contentCol.appendChild(footer.render());
        }

        container.appendChild(contentCol);

        return container;
    }
}