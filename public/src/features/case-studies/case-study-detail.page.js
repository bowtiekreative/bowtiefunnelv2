import { HeroComponent } from '../../shared/hero.component.js';
import { CtaBlockComponent } from '../services/components/cta-block.js';
import { EventBus } from '../../core/event-bus.js';

export class CaseStudyDetailPage {
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
                Back to Case Studies
            </button>
        `;
        backBtnContainer.querySelector('button').addEventListener('click', () => {
             EventBus.emit('navigate', 'case_studies_index');
        });
        container.appendChild(backBtnContainer);
        
        // Hero
        if (this.data.hero) {
            const hero = new HeroComponent(this.data.hero);
            container.appendChild(hero.render());
        }
        
        // Content
        const content = document.createElement('div');
        content.className = "py-12 md:py-16 space-y-16";
        
        // Main Image
        if (this.data.mainImage) {
            const imgContainer = document.createElement('div');
            imgContainer.className = "w-full rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl";
            imgContainer.innerHTML = `<img src="${this.data.mainImage}" alt="${this.data.title}" class="w-full h-auto">`;
            content.appendChild(imgContainer);
        }

        // Project Info Grid
        if (this.data.info) {
             const infoGrid = document.createElement('div');
             infoGrid.className = "grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50";
             
             this.data.info.forEach(item => {
                 const div = document.createElement('div');
                 div.innerHTML = `
                    <h4 class="text-indigo-400 text-sm uppercase tracking-wider font-semibold mb-2">${item.label}</h4>
                    <p class="text-white font-medium">${item.value}</p>
                 `;
                 infoGrid.appendChild(div);
             });
             content.appendChild(infoGrid);
        }
        
        // Sections
        if (this.data.sections) {
            this.data.sections.forEach((section, index) => {
                const sec = document.createElement('div');
                sec.className = `grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`; // Removed alternating class for now as it can be tricky with diverse content, simple left-right or stacked is safer, but let's keep it simple.
                // Actually, let's just stack text and image or keep it simple.
                
                // Let's do simple vertical stack for mobile, side-by-side for desktop
                sec.className = "grid md:grid-cols-2 gap-12 items-center";

                const textCol = `
                    <div class="space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}">
                        <h3 class="text-2xl md:text-3xl font-bold text-white">${section.title}</h3>
                        <div class="prose prose-lg prose-invert text-slate-300">
                            ${section.content}
                        </div>
                    </div>
                `;
                
                const imgCol = section.image ? `
                    <div class="rounded-xl overflow-hidden border border-slate-700/50 shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}">
                        <img src="${section.image}" alt="${section.title}" class="w-full h-auto">
                    </div>
                ` : '<div class="hidden md:block"></div>';

                sec.innerHTML = textCol + imgCol;
                content.appendChild(sec);
            });
        }
        
        container.appendChild(content);

        // CTA
        if (this.data.ctaBlock) {
            const cta = new CtaBlockComponent(this.data.ctaBlock);
            container.appendChild(cta.render());
        }

        return container;
    }
}
