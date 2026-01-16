import { navigateTo } from '../../../core/event-bus.js';

export class SegmentCardComponent {
    constructor(segmentData) {
        this.data = segmentData;
    }

    render() {
        const btn = document.createElement('button');
        btn.className = "text-left group glass-panel p-6 rounded-xl hover:bg-slate-800/80 transition-all hover:scale-[1.02] hover:shadow-indigo-500/10 hover:shadow-xl hover:border-indigo-500/30 flex flex-col h-full w-full relative overflow-hidden";
        
        const buttonText = this.data.buttonText || "Select Option";
        
        const iconHTML = this.data.icon ? `
            <div class="mb-4 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                ${this.data.icon}
            </div>
        ` : '';

        btn.innerHTML = `
            <div class="flex-grow">
                ${iconHTML}
                <h3 class="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">${this.data.label}</h3>
                <p class="text-slate-400 text-sm leading-relaxed mb-6">${this.data.description}</p>
            </div>
            <div class="mt-auto w-full">
                <span class="inline-flex items-center justify-center w-full px-4 py-3 bg-indigo-600/20 group-hover:bg-indigo-600 text-indigo-300 group-hover:text-white text-sm font-semibold rounded-lg transition-all duration-300 border border-indigo-500/30 group-hover:border-transparent">
                    ${buttonText}
                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </span>
            </div>
        `;

        btn.onclick = () => navigateTo(this.data.nextPageId);
        return btn;
    }
}