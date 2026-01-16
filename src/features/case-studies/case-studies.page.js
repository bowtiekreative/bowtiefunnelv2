import { HeroComponent } from '../../shared/hero.component.js';
import { CtaBlockComponent } from '../services/components/cta-block.js';
import { EventBus } from '../../core/event-bus.js';

export class CaseStudiesPage {
    constructor(pageConfig) {
        this.data = pageConfig;
    }

    render() {
        const container = document.createElement('div');
        
        // 0. Back Button
        const backBtnContainer = document.createElement('div');
        backBtnContainer.className = "max-w-7xl mx-auto px-4 md:px-8 pt-8";
        backBtnContainer.innerHTML = `
            <button class="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Home
            </button>
        `;
        backBtnContainer.querySelector('button').addEventListener('click', () => {
             EventBus.emit('navigate', 'free_book_optin'); // Or whatever the start page is
        });
        container.appendChild(backBtnContainer);

        // 1. Hero
        if (this.data.hero) {
            const hero = new HeroComponent(this.data.hero);
            container.appendChild(hero.render());
        }

        // 2. Case Studies Grid
        if (this.data.studies) {
            const gridSection = document.createElement('section');
            gridSection.className = "py-16 md:py-24 relative";
            
            const grid = document.createElement('div');
            grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12";
            
            this.data.studies.forEach(study => {
                const card = this.createCaseStudyCard(study);
                grid.appendChild(card);
            });
            
            gridSection.appendChild(grid);
            container.appendChild(gridSection);
        }

        // 3. CTA
        if (this.data.ctaBlock) {
            const cta = new CtaBlockComponent(this.data.ctaBlock);
            container.appendChild(cta.render());
        }

        return container;
    }

    createCaseStudyCard(study) {
        const card = document.createElement('div');
        card.className = "group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl";
        
        const image = study.image || 'https://via.placeholder.com/800x600?text=Project+Preview';
        
        card.innerHTML = `
            <div class="aspect-[4/3] w-full bg-slate-900 relative">
                <img src="${image}" alt="Project Image" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        `;

        return card;
    }
}
