import { getImage } from '../data/images.js';

export class HeroComponent {
    constructor(heroData) {
        this.data = heroData;
    }

    render() {
        if (!this.data) return document.createElement('div');
        
        const container = document.createElement('div');

        if (this.data.imageKey) {
            const imageUrl = getImage(this.data.imageKey);
            container.className = "grid md:grid-cols-2 gap-12 items-center mb-8";
            
            container.innerHTML = `
                <div class="space-y-6 order-2 md:order-1">
                    <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        ${this.data.headline}
                    </h1>
                    <p class="text-lg md:text-xl text-slate-300 leading-relaxed">
                        ${this.data.subheadline}
                    </p>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                     <div class="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                        <img src="${imageUrl}" alt="Hero Image" class="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                     </div>
                </div>
            `;
        } else {
            container.className = "text-center max-w-3xl mx-auto mb-16 mt-8";
            container.innerHTML = `
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        ${this.data.headline}
                    </h1>
                    <p class="text-lg md:text-xl text-slate-300 leading-relaxed">
                        ${this.data.subheadline}
                    </p>
                </div>
            `;
        }
        return container;
    }
}