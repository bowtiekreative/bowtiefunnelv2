export class CtaBlockComponent {
    constructor(ctaData) {
        this.data = ctaData;
    }

    render() {
        const container = document.createElement('div');
        container.className = "text-center my-24 bg-gradient-to-b from-slate-800/50 to-transparent p-12 rounded-3xl border border-white/5";

        const stepsHTML = this.data.steps ? `
            <div class="flex flex-col md:flex-row justify-center gap-8 mb-12 text-left max-w-3xl mx-auto">
                ${this.data.steps.map((step, i) => `
                    <div class="flex items-center">
                        <span class="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center mr-3 flex-shrink-0">${i + 1}</span>
                        <span class="text-slate-300 font-medium">${step}</span>
                    </div>
                `).join('')}
            </div>
        ` : '';

        const secondaryBtnHTML = this.data.secondaryCta ? `
            <div class="mt-6">
                <button class="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:underline decoration-slate-600 underline-offset-4" id="secondary-cta-btn">
                    ${this.data.secondaryCta.label}
                </button>
            </div>
        ` : '';

        container.innerHTML = `
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${this.data.headline}</h2>
            ${this.data.subheadline ? `<p class="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">${this.data.subheadline}</p>` : ''}
            
            ${stepsHTML}

            <button class="bg-white text-slate-900 hover:bg-slate-200 font-bold py-4 px-12 rounded-xl text-lg transition-all transform hover:-translate-y-1 shadow-2xl shadow-white/10" id="primary-cta-btn">
                ${this.data.primaryCta.label}
            </button>

            ${secondaryBtnHTML}
        `;

        // Attach listeners
        const primaryBtn = container.querySelector('#primary-cta-btn');
        if (primaryBtn) {
            primaryBtn.onclick = () => this.handleAction(this.data.primaryCta);
        }

        const secondaryBtn = container.querySelector('#secondary-cta-btn');
        if (secondaryBtn) {
            secondaryBtn.onclick = () => this.handleAction(this.data.secondaryCta);
        }

        return container;
    }

    handleAction(cta) {
        if (!cta) return;
        if (cta.action === 'scroll_to_plans') {
            const plansGrid = document.getElementById('plans-grid');
            if (plansGrid) plansGrid.scrollIntoView({ behavior: 'smooth' });
        } else if (cta.action === 'navigate') {
            import('../../../core/event-bus.js').then(({ navigateTo }) => {
                navigateTo(cta.nextPageId);
            });
        }
    }
}