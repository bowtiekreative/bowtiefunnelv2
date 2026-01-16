import { getImage } from '../../../data/images.js';

export class BonusComponent {
    constructor(bonuses) {
        this.bonuses = bonuses;
    }

    render() {
        if (!this.bonuses || this.bonuses.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto mt-16";

        const title = document.createElement('h2');
        title.className = "text-2xl font-bold text-white text-center mb-8";
        title.textContent = "Exclusive Workshop Bonuses";
        container.appendChild(title);

        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-1 gap-6";

        this.bonuses.forEach(bonus => {
            const card = document.createElement('div');
            card.className = "glass-panel p-8 rounded-2xl border border-indigo-500/30 bg-indigo-900/10 flex flex-col md:flex-row gap-8 items-center";
            
            const imageHTML = bonus.imageKey
                ? `<div class="w-48 aspect-video overflow-hidden rounded-lg shadow-lg border border-indigo-500/20 bg-black">
                     <img src="${getImage(bonus.imageKey)}" alt="${bonus.title}" class="w-full h-full object-cover">
                   </div>`
                : `<div class="w-24 h-32 bg-indigo-800 rounded shadow-lg flex items-center justify-center border border-indigo-500/20">
                     <span class="text-indigo-300 text-xs font-bold uppercase tracking-wider text-center px-2">Bonus Guide</span>
                   </div>`;

            card.innerHTML = `
                <div class="flex-shrink-0">
                    ${imageHTML}
                </div>
                <div class="text-center md:text-left">
                    <div class="text-emerald-400 font-bold uppercase tracking-wider text-xs mb-2">Free Bonus Gift</div>
                    <h3 class="text-xl font-bold text-white mb-2">${bonus.title}</h3>
                    <p class="text-slate-300 mb-4">${bonus.description}</p>
                    <ul class="space-y-2">
                        ${bonus.items.map(item => `
                            <li class="flex items-center justify-center md:justify-start text-sm text-slate-400">
                                <svg class="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
        return container;
    }
}