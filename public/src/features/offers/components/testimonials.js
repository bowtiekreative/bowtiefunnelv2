export class TestimonialComponent {
    constructor(title, testimonials) {
        this.title = title;
        this.testimonials = testimonials;
    }

    render() {
        if (!this.testimonials || this.testimonials.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto mt-16";

        if (this.title) {
            const heading = document.createElement('h2');
            heading.className = "text-3xl font-bold text-white text-center mb-10";
            heading.textContent = this.title;
            container.appendChild(heading);
        }

        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-2 gap-6";

        this.testimonials.forEach(t => {
            const card = document.createElement('div');
            card.className = "glass-panel p-6 rounded-xl border border-white/5 flex flex-col";
            
            card.innerHTML = `
                <div class="flex-grow mb-6">
                    <svg class="w-8 h-8 text-indigo-500 mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.925 14.932 15.087 15.543 14.249 16.313 13.635 17.243 13.245L17.243 9.972C16.172 9.972 15.343 9.652 14.757 9.013 14.17 8.373 13.877 7.523 13.877 6.463L13.877 3 21 3 21 12.247C21 14.672 20.318 16.732 18.954 18.425 17.59 20.119 15.945 20.977 14.017 21ZM5 21L5 18C5 16.896 5.304 15.925 5.915 15.087 6.526 14.249 7.296 13.635 8.226 13.245L8.226 9.972C7.155 9.972 6.326 9.652 5.74 9.013 5.154 8.373 4.861 7.523 4.861 6.463L4.861 3 11.984 3 11.984 12.247C11.984 14.672 11.302 16.732 9.938 18.425 8.574 20.119 6.929 20.977 5 21Z"/>
                    </svg>
                    <p class="text-slate-300 italic leading-relaxed">"${t.quote}"</p>
                </div>
                <div class="flex items-center mt-auto pt-4 border-t border-white/5">
                    <div>
                        <p class="text-white font-semibold text-sm">${t.author}</p>
                        <p class="text-slate-500 text-xs">${t.role}</p>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
        return container;
    }
}