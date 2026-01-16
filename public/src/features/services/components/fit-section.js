export class FitSectionComponent {
    constructor(fitData) {
        this.data = fitData;
    }

    render() {
        const container = document.createElement('div');
        container.className = "grid md:grid-cols-2 gap-8 my-16";

        // Perfect For
        const perfectCol = document.createElement('div');
        perfectCol.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                <span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mr-3">✓</span>
                Who This Is For
            </h3>
            <ul class="space-y-3">
                ${this.data.perfectFor.map(item => `
                    <li class="flex items-start text-slate-300">
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        `;
        
        // Not For
        const notCol = document.createElement('div');
        notCol.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                <span class="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mr-3">✕</span>
                Not A Good Fit If...
            </h3>
            <ul class="space-y-3">
                ${this.data.notFor.map(item => `
                    <li class="flex items-start text-slate-300">
                        <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        `;

        container.appendChild(perfectCol);
        container.appendChild(notCol);
        return container;
    }
}