export class CookieConsentComponent {
    constructor() {
        this.storageKey = 'cookie_consent_accepted';
    }

    render() {
        // If already accepted, return empty fragment
        if (localStorage.getItem(this.storageKey) === 'true') {
            return document.createDocumentFragment();
        }

        const container = document.createElement('div');
        container.className = "fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-white/10 p-4 z-50 backdrop-blur-md transform transition-transform duration-500 ease-out translate-y-full";
        container.id = "cookie-consent-banner";

        container.innerHTML = `
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-sm text-slate-300 text-center md:text-left">
                    <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
                </div>
                <div class="flex gap-3">
                    <button id="accept-cookies" class="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-indigo-500/20">
                        Accept
                    </button>
                    <button id="decline-cookies" class="bg-transparent hover:bg-white/5 text-slate-400 text-sm font-medium py-2 px-6 rounded-lg border border-white/10 transition-colors">
                        Decline
                    </button>
                </div>
            </div>
        `;

        // Add event listeners after a slight delay to ensure DOM insertion
        setTimeout(() => {
            const acceptBtn = container.querySelector('#accept-cookies');
            const declineBtn = container.querySelector('#decline-cookies');

            if (acceptBtn) {
                acceptBtn.addEventListener('click', () => {
                    localStorage.setItem(this.storageKey, 'true');
                    this.hide(container);
                });
            }

            if (declineBtn) {
                declineBtn.addEventListener('click', () => {
                    // For decline, we just hide it for the session (or could store 'false')
                    sessionStorage.setItem('cookie_consent_declined', 'true');
                    this.hide(container);
                });
            }

            // Animate in
            requestAnimationFrame(() => {
                container.classList.remove('translate-y-full');
            });
        }, 100);

        // Check if declined in this session
        if (sessionStorage.getItem('cookie_consent_declined') === 'true') {
            return document.createDocumentFragment();
        }

        return container;
    }

    hide(element) {
        element.classList.add('translate-y-full');
        setTimeout(() => {
            element.remove();
        }, 500);
    }
}