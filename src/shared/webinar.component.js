export class WebinarComponent {
    constructor() {
        this.videoUrl = "https://www.youtube.com/watch?v=WmIXz3z_3Gc";
        this.title = "Ready To Build A Revenue System?";
    }

    render() {
        const container = document.createElement('div');
        container.className = "w-full max-w-5xl mx-auto my-24 px-4 md:px-0";

        const videoId = "WmIXz3z_3Gc";

        container.innerHTML = `
            <div class="text-center mb-12">
                <div class="inline-flex items-center px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-500/30">
                    <svg class="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Free Masterclass
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">${this.title}</h2>
                <div class="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div class="relative w-full aspect-video bg-slate-900 rounded-2xl shadow-2xl shadow-blue-500/10 border border-white/10 overflow-hidden group">
                <div class="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}?rel=0" 
                    title="${this.title}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    class="w-full h-full absolute top-0 left-0"
                ></iframe>
            </div>
        `;
        
        return container;
    }
}
