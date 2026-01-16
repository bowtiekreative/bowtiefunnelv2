export class CountdownComponent {
    constructor(config = {}, timerId = null) {
        this.title = config.title || "Limited Spots Available This Quarter";
        this.subtitle = config.subtitle || "We only take on 3 implementation clients per quarter to ensure quality delivery";
        this.label = config.label || "Application Deadline";
        this.initialTimer = config.timer || { days: "06", hours: "23", minutes: "59", seconds: "55" };
        
        // Use provided ID or generate one from title to ensure session persistence works
        this.timerId = timerId || this.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        
        this.elements = {};
        this.intervalId = null;
    }

    getEndTime() {
        const storageKey = `timer_end_${this.timerId}`;
        const storedEnd = sessionStorage.getItem(storageKey);

        if (storedEnd) {
            return parseInt(storedEnd, 10);
        }

        // Calculate duration in seconds
        const days = parseInt(this.initialTimer.days || 0, 10);
        const hours = parseInt(this.initialTimer.hours || 0, 10);
        const minutes = parseInt(this.initialTimer.minutes || 0, 10);
        const seconds = parseInt(this.initialTimer.seconds || 0, 10);

        const durationSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;
        const endTime = Date.now() + (durationSeconds * 1000);

        sessionStorage.setItem(storageKey, endTime.toString());
        return endTime;
    }

    updateTimer() {
        const now = Date.now();
        const timeLeft = Math.max(0, this.endTime - now);
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        if (this.elements.days) this.elements.days.textContent = String(days).padStart(2, '0');
        if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
        if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
        if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');

        if (timeLeft <= 0 && this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render() {
        const container = document.createElement('div');
        container.className = "max-w-2xl mx-auto my-12 text-center";
        
        // Initialize End Time
        this.endTime = this.getEndTime();

        container.innerHTML = `
            <div class="inline-block bg-red-900/30 border border-red-500/30 rounded-lg px-4 py-2 mb-6">
                <span class="text-red-400 font-bold uppercase tracking-wider text-xs">${this.label}</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-2">${this.title}</h3>
            <p class="text-slate-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">${this.subtitle}</p>
            
            <div class="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                <div class="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <div class="text-3xl md:text-4xl font-bold text-white mb-1" data-timer="days">--</div>
                    <div class="text-xs text-slate-500 uppercase">Days</div>
                </div>
                <div class="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <div class="text-3xl md:text-4xl font-bold text-white mb-1" data-timer="hours">--</div>
                    <div class="text-xs text-slate-500 uppercase">Hours</div>
                </div>
                <div class="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <div class="text-3xl md:text-4xl font-bold text-white mb-1" data-timer="minutes">--</div>
                    <div class="text-xs text-slate-500 uppercase">Minutes</div>
                </div>
                <div class="bg-slate-800/50 rounded-xl p-4 border border-white/5">
                    <div class="text-3xl md:text-4xl font-bold text-white mb-1" data-timer="seconds">--</div>
                    <div class="text-xs text-slate-500 uppercase">Seconds</div>
                </div>
            </div>
        `;

        // Cache elements
        this.elements.days = container.querySelector('[data-timer="days"]');
        this.elements.hours = container.querySelector('[data-timer="hours"]');
        this.elements.minutes = container.querySelector('[data-timer="minutes"]');
        this.elements.seconds = container.querySelector('[data-timer="seconds"]');

        // Start Timer
        this.updateTimer(); // Initial update
        this.intervalId = setInterval(() => {
            if (!document.body.contains(container)) {
                clearInterval(this.intervalId);
                return;
            }
            this.updateTimer();
        }, 1000);

        return container;
    }
}