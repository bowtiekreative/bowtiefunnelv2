export class FAQComponent {
    constructor(faqs) {
        this.faqs = faqs;
    }

    render() {
        if (!this.faqs || this.faqs.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-3xl mx-auto mt-16 space-y-6";

        const title = document.createElement('h2');
        title.className = "text-2xl font-bold text-white text-center mb-8";
        title.textContent = "Frequently Asked Questions";
        container.appendChild(title);

        this.faqs.forEach(faq => {
            const item = document.createElement('div');
            item.className = "border-b border-white/10 pb-6";
            item.innerHTML = `
                <h3 class="text-lg font-semibold text-white mb-2">${faq.question}</h3>
                <p class="text-slate-400 leading-relaxed">${faq.answer}</p>
            `;
            container.appendChild(item);
        });

        return container;
    }
}