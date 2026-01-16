import { HeroComponent } from '../../shared/hero.component.js';
import { CtaBlockComponent } from '../services/components/cta-block.js';

export class CaseStudyDetailPage {
    constructor(pageConfig) {
        this.data = pageConfig;
    }

    render() {
        const container = document.createElement('div');
        
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
