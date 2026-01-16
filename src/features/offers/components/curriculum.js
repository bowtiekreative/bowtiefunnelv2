export class CurriculumComponent {
    constructor(title, items) {
        this.title = title;
        this.items = items;
    }

    render() {
        if (!this.items || this.items.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-3xl mx-auto mt-16";

        if (this.title) {
            const heading = document.createElement('h2');
            heading.className = "text-2xl font-bold text-white text-center mb-8";
            heading.textContent = this.title;
            container.appendChild(heading);
        }

        const list = document.createElement('div');
        list.className = "grid md:grid-cols-2 gap-4";

        this.items.forEach((item, idx) => {
            const el = document.createElement('div');
            el.className = "flex items-center p-4 bg-slate-800/50 rounded-lg border border-white/5";
            el.innerHTML = `
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-900/50 text-indigo-400 font-bold rounded-lg mr-4 text-sm">${idx + 1}</span>
                <span class="text-slate-200 font-medium">${item}</span>
            `;
            list.appendChild(el);
        });

        container.appendChild(list);
        return container;
    }
}