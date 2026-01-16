import { EventBus } from '../core/event-bus.js';

export class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }

    render() {
        const footer = document.createElement('footer');
        footer.className = "w-full border-t border-white/10 mt-24 py-12";
        
        footer.innerHTML = `
            <div class="max-w-5xl mx-auto px-4 md:px-8 text-center">
                <div class="mb-8">
                    <p class="text-slate-500 text-sm">
                        &copy; ${this.year} Bow Tie Kreative. All rights reserved.
                    </p>
                </div>
                
                <div class="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-slate-400">
                    <a href="?page=case_studies_index" class="hover:text-white transition-colors nav-link" data-page="case_studies_index">Case Studies</a>
                    <a href="?page=privacy_policy" class="hover:text-white transition-colors nav-link" data-page="privacy_policy">Privacy Policy</a>
                    <a href="?page=terms_conditions" class="hover:text-white transition-colors nav-link" data-page="terms_conditions">Terms & Conditions</a>
                    <a href="?page=refund_policy" class="hover:text-white transition-colors nav-link" data-page="refund_policy">Refund Policy</a>
                </div>
                
                <div class="mt-8 text-xs text-slate-600 max-w-2xl mx-auto">
                    <p>
                        DISCLAIMER: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                </div>
            </div>
        `;

        // Add event listeners for navigation
        footer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const pageId = e.target.getAttribute('data-page');
                EventBus.emit('navigate', pageId);
            });
        });

        return footer;
    }
}
