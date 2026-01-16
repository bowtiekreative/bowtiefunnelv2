import { HeroComponent } from '../../shared/hero.component.js';

export class LegalPage {
    constructor(pageConfig) {
        this.config = pageConfig;
    }

    render() {
        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto";

        // Simple Hero or Header
        const header = document.createElement('div');
        header.className = "text-center mb-12";
        header.innerHTML = `
            <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">${this.config.title}</h1>
            <div class="h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        `;
        container.appendChild(header);

        // Content
        const content = document.createElement('div');
        content.className = "glass-panel p-8 md:p-12 rounded-2xl prose prose-invert max-w-none text-slate-300";
        content.innerHTML = this.config.content || '<p>Content coming soon...</p>';
        
        container.appendChild(content);

        // Back Button
        const backBtnContainer = document.createElement('div');
        backBtnContainer.className = "mt-8 text-center";
        backBtnContainer.innerHTML = `
            <a href="#" onclick="history.back(); return false;" class="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                &larr; Back
            </a>
        `;
        container.appendChild(backBtnContainer);

        return container;
    }
}
