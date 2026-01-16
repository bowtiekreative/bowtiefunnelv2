export class InstructorComponent {
    constructor(data) {
        this.data = data;
    }

    render() {
        if (!this.data) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto mt-24 bg-slate-800/30 rounded-3xl p-8 md:p-12 border border-white/5";

        const statsHTML = this.data.stats ? `
            <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-8">
                ${this.data.stats.map(s => `
                    <div class="text-center">
                        <div class="text-2xl md:text-3xl font-bold text-white mb-1">${s.value}</div>
                        <div class="text-xs text-slate-400 uppercase tracking-wider">${s.label}</div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        container.innerHTML = `
            <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div class="flex-1 space-y-4 text-center md:text-left">
                    <div class="inline-block bg-indigo-600/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Instructor</div>
                    <h2 class="text-3xl font-bold text-white">${this.data.name}</h2>
                    <p class="text-indigo-400 font-medium">${this.data.title}</p>
                    <p class="text-slate-300 leading-relaxed">${this.data.bio}</p>
                    <p class="text-slate-400 text-sm italic">${this.data.note}</p>
                    ${statsHTML}
                </div>
                
                <div class="w-full md:w-1/3 flex-shrink-0">
                    <div class="aspect-[3/4] bg-slate-700 rounded-2xl overflow-hidden relative shadow-2xl">
                         <img src="images/ryan-perez.jpg" alt="${this.data.name}" class="object-cover w-full h-full opacity-80 mix-blend-overlay">
                         <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                         <div class="absolute bottom-4 left-4 right-4 text-center">
                            <span class="text-white font-bold text-lg">${this.data.name}</span>
                         </div>
                    </div>
                </div>
            </div>
        `;

        return container;
    }
}