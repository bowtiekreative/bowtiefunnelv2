import { navigateTo } from '../../../core/event-bus.js';

export class OptinFormComponent {
    constructor(ctaData) {
        this.ctaData = ctaData;
    }

    render() {
        const container = document.createElement('div');
        container.className = "max-w-xl mx-auto glass-panel p-8 rounded-2xl shadow-xl border-t border-white/10";
        
        container.innerHTML = `
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                    <input type="text" required placeholder="Your first name" class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                </div>
                <div>
                    <label class="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input type="email" required placeholder="you@example.com" class="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
                </div>
                <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-lg shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-1 transform">
                    ${this.ctaData.label}
                </button>
            </form>
        `;

        const form = container.querySelector('form');
        form.onsubmit = (e) => {
            e.preventDefault();
            navigateTo(this.ctaData.nextPageId);
        };

        return container;
    }
}