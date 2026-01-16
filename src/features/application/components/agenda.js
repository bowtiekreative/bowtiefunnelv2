export class AgendaComponent {
    constructor(sessions) {
        this.sessions = sessions;
    }

    render() {
        if (!this.sessions || this.sessions.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "mt-16";

        const title = document.createElement('h2');
        title.className = "text-3xl font-bold text-white text-center mb-4";
        title.textContent = "6-Session Workshop Series";
        container.appendChild(title);

        const subtitle = document.createElement('p');
        subtitle.className = "text-slate-400 text-center mb-10 max-w-2xl mx-auto";
        subtitle.textContent = "A comprehensive journey from brand foundation to implementation roadmap";
        container.appendChild(subtitle);

        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-2 gap-6";

        this.sessions.forEach((session, index) => {
            const item = document.createElement('div');
            item.className = "glass-panel p-6 rounded-xl border border-white/5 flex flex-col";
            
            const listItems = session.items.map(i => `<li class="flex items-start text-sm text-slate-300"><span class="mr-2 text-indigo-500">•</span>${i}</li>`).join('');

            item.innerHTML = `
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1 block">Session ${index + 1}</span>
                        <h3 class="text-xl font-bold text-white">${session.title}</h3>
                    </div>
                    <span class="text-xs font-medium bg-slate-800 text-slate-300 px-2 py-1 rounded">${session.duration}</span>
                </div>
                <ul class="space-y-2 mb-4 flex-grow">
                    ${listItems}
                </ul>
            `;
            grid.appendChild(item);
        });

        container.appendChild(grid);
        return container;
    }
}