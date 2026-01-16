export class InfoFooterComponent {
    constructor(footerData) {
        this.data = footerData;
    }

    render() {
        if (!this.data) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-xl mx-auto text-center space-y-4 mt-8";
        
        if (this.data.tagline) {
            const tagline = document.createElement('p');
            tagline.className = "text-emerald-400 font-semibold text-sm uppercase tracking-wide";
            tagline.textContent = this.data.tagline;
            container.appendChild(tagline);
        }

        if (this.data.description) {
            const desc = document.createElement('p');
            desc.className = "text-slate-400 text-sm leading-relaxed";
            desc.textContent = this.data.description;
            container.appendChild(desc);
        }

        return container;
    }
}