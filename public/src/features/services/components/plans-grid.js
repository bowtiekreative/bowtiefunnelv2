import { navigateTo } from '../../../core/event-bus.js';
import { getImage } from '../../../data/images.js';

export class PlansGridComponent {
    constructor(plans) {
        this.plans = plans;
    }

    render() {
        if (!this.plans || this.plans.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "grid md:grid-cols-2 gap-8 my-16";
        container.id = "plans-grid";

        this.plans.forEach((plan, idx) => {
            const card = document.createElement('div');
            card.className = "glass-panel p-8 rounded-2xl flex flex-col border border-white/5 hover:border-indigo-500/30 transition-all group overflow-hidden relative";
            
            // Image Section
            let imageHTML = '';
            if (plan.imageKey) {
                const imageUrl = getImage(plan.imageKey);
                imageHTML = `
                    <div class="mb-6 -mx-8 -mt-8 h-48 overflow-hidden relative group-hover:opacity-90 transition-opacity">
                        <img src="${imageUrl}" alt="${plan.name}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                    </div>
                `;
            }

            card.innerHTML = `
                ${imageHTML}
                <h3 class="text-xl font-bold text-white mb-2 relative z-10">${plan.name}</h3>
                <div class="text-2xl font-bold text-indigo-400 mb-4 relative z-10">${plan.priceDisplay}</div>
                <p class="text-slate-400 text-sm mb-4 min-h-[40px] relative z-10">${plan.tagline}</p>
                <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5 mb-8 relative z-10">
                    <p class="text-slate-300 text-sm"><strong class="text-white">Highlight:</strong> ${plan.highlight}</p>
                </div>
                <button class="mt-auto w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-indigo-500/20 group-hover:-translate-y-1 transform relative z-10">
                    ${plan.primaryCta.label}
                </button>
            `;

            const btn = card.querySelector('button');
            btn.onclick = () => {
                if (plan.primaryCta.action === 'navigate') {
                    navigateTo(plan.primaryCta.nextPageId);
                }
            };

            container.appendChild(card);
        });

        return container;
    }
}