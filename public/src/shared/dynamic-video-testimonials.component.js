export class DynamicVideoTestimonialsComponent {
    constructor(apiUrl = 'https://bowtiekreative.com/wp-json/wp/v2/video-testimonial') {
        this.apiUrl = apiUrl;
        this.limit = 6; // Limit number of videos to show
    }

    async fetchTestimonials() {
        try {
            // Fetch a larger batch to allow for randomization
            const response = await fetch(`${this.apiUrl}?per_page=20`);
            if (!response.ok) throw new Error('Failed to fetch video testimonials');
            const data = await response.json();
            
            // Randomize the order (Fisher-Yates shuffle)
            for (let i = data.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
            
            // Return only the requested limit
            return data.slice(0, this.limit);
        } catch (error) {
            console.error('Error fetching video testimonials:', error);
            return [];
        }
    }

    getVideoId(item) {
        // 1. Try to get URL from meta_box first (Preferred)
        let videoUrl = item.meta_box && item.meta_box.url ? item.meta_box.url : null;
        
        // 2. Fallback: try to find an iframe src in rendered content
        if (!videoUrl && item.content && item.content.rendered) {
             const match = item.content.rendered.match(/src="([^"]+)"/);
             if (match) videoUrl = match[1];
        }

        if (!videoUrl) return null;

        // 3. Extract the ID based on common YouTube URL patterns
        // This handles:
        // - youtube.com/watch?v=ID
        // - youtu.be/ID
        // - youtube.com/embed/ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = videoUrl.match(regExp);

        // Return the ID if found (standard ID length is 11)
        return (match && match[2].length === 11) ? match[2] : null;
    }

    render() {
        const container = document.createElement('div');
        container.className = "w-full max-w-6xl mx-auto my-16 px-4 md:px-0 relative";
        
        // --- Lightbox Setup ---
        const lightboxId = 'video-lightbox-' + Math.random().toString(36).substr(2, 9);
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.id = lightboxId;
        
        // Fix: Background is now a blurred dark blue/slate (not pure black), content centered
        lightboxOverlay.className = "fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-md hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300";
        
        // Card Container
        lightboxOverlay.innerHTML = `
            <div class="lightbox-card relative w-full max-w-5xl aspect-video bg-slate-800 rounded-2xl shadow-2xl shadow-black/50 border border-white/10 overflow-hidden transform scale-95 transition-all duration-300 flex flex-col">
                <!-- Close Button -->
                <button class="lightbox-close absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/50 hover:bg-rose-600 rounded-full p-2 transition-all backdrop-blur-md shadow-lg">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <!-- Video Content -->
                <div class="lightbox-content w-full h-full bg-black">
                    <!-- Iframe injected here -->
                </div>
            </div>
        `;
        document.body.appendChild(lightboxOverlay);

        // --- Lightbox Logic ---
        const openLightbox = (videoId) => {
            const content = lightboxOverlay.querySelector('.lightbox-content');
            const card = lightboxOverlay.querySelector('.lightbox-card');
            
            // CORE LOGIC: Grab ID and append to https://www.youtube.com/embed/
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            
            content.innerHTML = `<iframe src="${embedUrl}" title="Video testimonial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full object-cover"></iframe>`;
            
            lightboxOverlay.classList.remove('hidden');
            // Small delay for CSS transitions
            setTimeout(() => {
                lightboxOverlay.classList.remove('opacity-0');
                card.classList.remove('scale-95');
                card.classList.add('scale-100');
            }, 10);
            
            document.body.style.overflow = 'hidden'; 
        };

        const closeLightbox = () => {
            const card = lightboxOverlay.querySelector('.lightbox-card');
            
            lightboxOverlay.classList.add('opacity-0');
            card.classList.remove('scale-100');
            card.classList.add('scale-95');
            
            setTimeout(() => {
                lightboxOverlay.classList.add('hidden');
                lightboxOverlay.querySelector('.lightbox-content').innerHTML = ''; // Clear iframe
                document.body.style.overflow = '';
            }, 300);
        };

        lightboxOverlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', (e) => {
            // Close if clicking outside the card
            if (e.target === lightboxOverlay) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !lightboxOverlay.classList.contains('hidden')) closeLightbox();
        });

        // --- Section Render ---
        container.innerHTML = `
            <div class="text-center mb-12">
                <div class="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-rose-400 uppercase bg-rose-900/20 rounded-full border border-rose-500/20">
                    Watch Their Stories
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Real Results on Video</h2>
                <p class="text-slate-400 max-w-2xl mx-auto">Hear directly from clients about their journey and transformation.</p>
            </div>
            <div id="video-testimonials-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Loading State -->
                ${Array(3).fill(0).map(() => `
                    <div class="glass-panel rounded-xl overflow-hidden animate-pulse">
                        <div class="aspect-video bg-slate-700/50 w-full"></div>
                        <div class="p-6">
                            <div class="h-4 bg-slate-700/50 rounded w-3/4 mb-2"></div>
                            <div class="h-3 bg-slate-700/30 rounded w-1/2"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Fetch and Populate
        this.fetchTestimonials().then(data => {
            const grid = container.querySelector('#video-testimonials-grid');
            if (!grid) return;

            if (data.length === 0) {
                container.style.display = 'none';
                return;
            }

            grid.innerHTML = ''; 

            data.forEach(item => {
                const title = item.title.rendered;
                const videoId = this.getVideoId(item);
                
                if (!videoId) return;

                // High Quality Thumbnail
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                const card = document.createElement('div');
                card.className = "glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-rose-500/30 transition-all flex flex-col h-full group cursor-pointer";
                card.innerHTML = `
                    <div class="aspect-video bg-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
                        <img src="${thumbnailUrl}" alt="${title}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                        
                        <!-- Play Button Overlay -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-16 h-16 bg-rose-600/90 rounded-full flex items-center justify-center shadow-lg shadow-rose-900/40 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-white text-lg mb-2 group-hover:text-rose-400 transition-colors line-clamp-2">${title}</h3>
                        <div class="flex items-center text-xs text-slate-500">
                            <svg class="w-3 h-3 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                            Video Testimonial
                        </div>
                    </div>
                `;

                // On Click: Open Lightbox with Embed URL
                card.addEventListener('click', () => openLightbox(videoId));
                
                grid.appendChild(card);
            });
        });

        return container;
    }
}
