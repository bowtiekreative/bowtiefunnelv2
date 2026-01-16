export class FeaturesListComponent {
    constructor(features) {
        this.features = features;
    }

    render() {
        if (!this.features || this.features.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-xl mx-auto mb-8";
        
        const list = document.createElement('ul');
        list.className = "space-y-3";
        
        this.features.forEach(feature => {
            const item = document.createElement('li');
            item.className = "flex items-start text-slate-300";
            item.innerHTML = `
                <svg class="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>${feature}</span>
            `;
            list.appendChild(item);
        });

        container.appendChild(list);
        return container;
    }
}