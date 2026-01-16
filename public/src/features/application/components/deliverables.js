export class DeliverablesComponent {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }

    render() {
        if (!this.items || this.items.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "mt-16 max-w-4xl mx-auto";

        const title = document.createElement('h2');
        title.className = "text-3xl font-bold text-white text-center mb-10";
        title.textContent = this.title;
        container.appendChild(title);

        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-2 gap-8";

        this.items.forEach(item => {
            const el = document.createElement('div');
            el.className = "flex items-start";
            el.innerHTML = `
                <div class="flex-shrink-0 w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <h3 class="text-lg font-bold text-white mb-2">${item.title}</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">${item.description}</p>
                </div>
            `;
            grid.appendChild(el);
        });

        container.appendChild(grid);
        return container;
    }
}