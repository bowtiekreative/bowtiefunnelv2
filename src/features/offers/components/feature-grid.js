export class FeatureGridComponent {
    constructor(title, features) {
        this.title = title;
        this.features = features;
    }

    render() {
        if (!this.features || this.features.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto mt-16";

        if (this.title) {
            const heading = document.createElement('h2');
            heading.className = "text-3xl font-bold text-white text-center mb-10";
            heading.textContent = this.title;
            container.appendChild(heading);
        }

        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6";

        this.features.forEach(feature => {
            const item = document.createElement('div');
            item.className = "glass-panel p-6 rounded-xl border border-white/5";
            item.innerHTML = `
                <h3 class="text-indigo-400 font-bold text-lg mb-2">${feature.title}</h3>
                <p class="text-slate-300 text-sm leading-relaxed">${feature.description}</p>
            `;
            grid.appendChild(item);
        });

        container.appendChild(grid);
        return container;
    }
}