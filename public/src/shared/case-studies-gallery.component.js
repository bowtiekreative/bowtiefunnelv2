import { EventBus } from '../core/event-bus.js';
import { funnelConfig } from '../data/config.js';

export class CaseStudiesGalleryComponent {
    constructor(title = "Featured Case Studies") {
        this.title = title;
        // Access the studies directly from config if available, otherwise use defaults
        this.studies = funnelConfig.pages.case_studies_index?.studies || [];
    }

    render() {
        const container = document.createElement('section');
        container.className = "w-full py-16 md:py-24 relative border-t border-slate-800/50";
        
        if (this.studies.length === 0) return container;

        container.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 md:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${this.title}</h2>
                    <p class="text-slate-400 max-w-2xl mx-auto">See how we've helped other businesses transform their digital presence.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Cards will be injected here -->
                </div>
                
                <div class="mt-12 text-center">
                    <button class="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors border border-slate-700" data-action="view-all">
                        View All Case Studies
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
        `;

        const grid = container.querySelector('.grid');
        
        // Take first 3 for the preview/gallery
        this.studies.slice(0, 3).forEach(study => {
            const card = this.createCard(study);
            grid.appendChild(card);
        });

        // Event Listeners
        const viewAllBtn = container.querySelector('[data-action="view-all"]');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', () => {
                EventBus.emit('navigate', 'case_studies_index');
            });
        }

        return container;
    }

    createCard(study) {
        const card = document.createElement('div');
        card.className = "group relative bg-slate-800/30 rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300";
        
        const image = study.image || 'https://via.placeholder.com/600x400';

        card.innerHTML = `
            <div class="aspect-video w-full overflow-hidden bg-slate-900 relative">
                <img src="${image}" alt="Case Study Image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            </div>
            <a href="#" class="absolute inset-0 z-10" aria-label="View Case Study"></a>
        `;

        const link = card.querySelector('a');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Just navigate to the gallery index since detail pages might not exist for all
            EventBus.emit('navigate', 'case_studies_index');
        });

        return card;
    }
}
