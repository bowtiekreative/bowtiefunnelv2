import { HeroComponent } from '../../shared/hero.component.js';
import { CtaBlockComponent } from '../services/components/cta-block.js';
import { EventBus } from '../../core/event-bus.js';

export class CaseStudiesPage {
    constructor(pageConfig) {
        this.data = pageConfig;
    }

    render() {
        const container = document.createElement('div');
        
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
        card.className = "group relative flex flex-col h-full bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden";
        
        const image = study.image || 'https://via.placeholder.com/800x600?text=Project+Preview';
        
        card.innerHTML = `
            <div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
                <img src="${image}" alt="${study.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
            <div class="p-6 flex-grow flex flex-col">
                <div class="flex items-center gap-2 mb-3">
                    <span class="px-2 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-md uppercase tracking-wider">${study.category || 'Project'}</span>
                </div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">${study.title}</h3>
                <p class="text-slate-400 text-sm mb-6 flex-grow line-clamp-3">${study.description}</p>
                <button class="w-full py-3 px-4 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-semibold flex items-center justify-center gap-2 pointer-events-auto" data-action="navigate">
                    View Case Study
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>
        `;

        const btn = card.querySelector('button');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                EventBus.emit('navigate', study.linkId);
            });
        }

        return card;
    }
}
