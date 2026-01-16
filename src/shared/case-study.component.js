export class CaseStudyComponent {
    constructor() {
        this.data = {
            title: "Renée Taylor",
            subtitle: "Academy Award Nominee & Emmy Award Winner",
            videoUrl: "https://www.youtube.com/watch?v=WG7N7GebMVk",
            description: "Renée Taylor is a celebrated American actress, writer, and director, famous for playing Sylvia Fine, Fran Drescher's mother, on the hit sitcom The Nanny, and for co-writing the film Lovers and Other Strangers (earning an Oscar nomination) and the play My Life on a Diet. A versatile talent, she's known for her comedic timing on TV, stage, and film, often collaborating with her late husband, Joe Bologna, and continues to perform and write."
        };
    }

    getVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    render() {
        const container = document.createElement('div');
        container.className = "w-full max-w-6xl mx-auto my-20 px-4 md:px-0";
        
        const videoId = this.getVideoId(this.data.videoUrl);
        // Use standard embed with modest branding
        const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : '';

        container.innerHTML = `
            <div class="glass-panel p-8 md:p-12 rounded-3xl border border-amber-500/20 bg-gradient-to-b from-slate-900/50 to-amber-900/5 relative overflow-hidden">
                <!-- Background decoration -->
                <div class="absolute top-0 right-0 p-32 bg-amber-500/5 blur-3xl rounded-full pointer-events-none"></div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <!-- Video Column -->
                    <div class="order-2 lg:order-1">
                        <div class="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                            <iframe 
                                src="${embedUrl}" 
                                title="${this.data.title}" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                                class="w-full h-full absolute top-0 left-0"
                            ></iframe>
                        </div>
                    </div>
                    
                    <!-- Content Column -->
                    <div class="order-1 lg:order-2">
                        <div class="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-wider text-amber-400 uppercase bg-amber-900/30 rounded-full border border-amber-500/30">
                            <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            Featured Case Study
                        </div>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">${this.data.title}</h2>
                        <p class="text-amber-200/80 text-sm font-medium mb-6 uppercase tracking-wide">${this.data.subtitle}</p>
                        
                        <div class="prose prose-lg prose-invert text-slate-300 mb-8 leading-relaxed">
                            <p>${this.data.description}</p>
                        </div>
                        
                        <div class="flex items-center space-x-4 border-t border-white/10 pt-6">
                            <div class="text-sm text-slate-400">
                                <span class="text-white font-semibold">Known for:</span> The Nanny, Lovers and Other Strangers, My Life on a Diet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        return container;
    }
}
