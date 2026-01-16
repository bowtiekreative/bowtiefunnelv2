export class IntroSectionComponent {
    constructor(introData) {
        this.data = introData;
    }

    render() {
        const container = document.createElement('div');
        container.className = "max-w-3xl mx-auto space-y-12 mb-16";

        // Body Text
        if (this.data.body) {
            const bodyDiv = document.createElement('div');
            bodyDiv.className = "space-y-6 text-lg text-slate-300 leading-relaxed";
            this.data.body.forEach(p => {
                bodyDiv.innerHTML += `<p>${p}</p>`;
            });
            container.appendChild(bodyDiv);
        }

        // Feature Box (Why Bow Tie / What You Get)
        const featureBoxData = this.data.whyBowTie || this.data.whatYouGet;
        if (featureBoxData) {
            const box = document.createElement('div');
            box.className = "bg-slate-800/50 border border-white/5 rounded-2xl p-8";
            
            box.innerHTML = `
                <h3 class="text-xl font-bold text-white mb-6">${featureBoxData.headline}</h3>
                <ul class="space-y-3 mb-6">
                    ${featureBoxData.bullets.map(b => `
                        <li class="flex items-start text-slate-300">
                            <svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            ${b}
                        </li>
                    `).join('')}
                </ul>
                <p class="text-indigo-300 font-medium">${featureBoxData.summary}</p>
            `;
            container.appendChild(box);
        }

        return container;
    }
}