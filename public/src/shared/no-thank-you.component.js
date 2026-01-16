import { navigateTo } from '../core/event-bus.js';

export class NoThankYouComponent {
    constructor(data) {
        this.data = data;
    }

    render() {
        if (!this.data) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "text-center mt-12 pt-8 border-t border-white/5";

        const btn = document.createElement('button');
        btn.className = "text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors hover:underline decoration-slate-600 underline-offset-4";
        btn.textContent = this.data.label;
        btn.onclick = () => navigateTo(this.data.nextPageId);

        container.appendChild(btn);
        return container;
    }
}