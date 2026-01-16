export class DynamicTestimonialsComponent {
    constructor(apiUrl = 'https://bowtiekreative.com/wp-json/wp/v2/testimonial') {
        this.apiUrl = apiUrl;
        this.limit = 6; // Limit number of testimonials to show
    }

    async fetchTestimonials() {
        try {
            const response = await fetch(`${this.apiUrl}?per_page=20`);
            if (!response.ok) throw new Error('Failed to fetch testimonials');
            const data = await response.json();

            // Randomize the order (Fisher-Yates shuffle)
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }

            // Return only the requested limit
            return data.slice(0, this.limit);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            return [];
        }
    }

    render() {
        const container = document.createElement('div');
        container.className = "w-full max-w-6xl mx-auto my-16 px-4 md:px-0";
        
        // Header
        container.innerHTML = `
            <div class="text-center mb-12">
                <div class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-900/20 rounded-full border border-emerald-500/20">
                    Client Success Stories
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Growing Brands</h2>
                <p class="text-slate-400 max-w-2xl mx-auto">See what others are saying about their results with our systems.</p>
            </div>
            <div id="testimonials-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Loading State -->
                ${Array(3).fill(0).map(() => `
                    <div class="glass-panel p-6 rounded-xl animate-pulse">
                        <div class="h-4 bg-slate-700/50 rounded w-1/4 mb-4"></div>
                        <div class="space-y-2 mb-4">
                            <div class="h-3 bg-slate-700/30 rounded w-full"></div>
                            <div class="h-3 bg-slate-700/30 rounded w-full"></div>
                            <div class="h-3 bg-slate-700/30 rounded w-2/3"></div>
                        </div>
                        <div class="h-10 w-10 bg-slate-700/50 rounded-full"></div>
                    </div>
                `).join('')}
            </div>
        `;

        // Fetch and Populate
        this.fetchTestimonials().then(data => {
            const grid = container.querySelector('#testimonials-grid');
            if (!grid) return;

            if (data.length === 0) {
                container.style.display = 'none'; // Hide section if no data
                return;
            }

            grid.innerHTML = data.map(item => {
                // Parse Content (strip HTML tags if needed, but keeping basic formatting is usually safe)
                // We'll trust the WP API to provide clean HTML in content.rendered
                const content = item.content.rendered; 
                const title = item.title.rendered;
                
                // Fallback for missing avatar (WP doesn't send avatars in standard endpoint usually without 'embed')
                // We'll generate a generic initial-based avatar
                const initial = title.charAt(0) || 'C';

                return `
                    <div class="glass-panel p-6 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-full">
                        <div class="mb-6 text-slate-300 text-sm flex-grow relative">
                            <svg class="absolute -top-2 -left-2 w-8 h-8 text-indigo-500/20 transform -scale-x-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
                            <div class="relative z-10 pl-4 prose prose-invert prose-sm max-w-none">
                                ${content}
                            </div>
                        </div>
                        <div class="flex items-center mt-4 border-t border-white/5 pt-4">
                            <div class="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                ${initial}
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-semibold text-white">${title}</p>
                                <div class="text-xs text-indigo-400 flex items-center">
                                    <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    Verified Review
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        });

        return container;
    }
}
