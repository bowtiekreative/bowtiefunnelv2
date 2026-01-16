import { SegmentationService } from './segmentation.service.js';
import { HeroComponent } from '../../shared/hero.component.js';
import { SegmentCardComponent } from './components/segment-card.js';

export class SegmentationPage {
    constructor(pageConfig) {
        this.service = new SegmentationService(pageConfig);
        this.data = this.service.getData();
    }

    render() {
        const container = document.createElement('div');
        
        // 1. Hero
        const hero = new HeroComponent(this.data.hero);
        container.appendChild(hero.render());

        // 1.5 Section Title (Optional)
        if (this.data.sectionTitle) {
            const title = document.createElement('h2');
            title.className = "text-2xl md:text-3xl font-bold text-center text-white mb-8 mt-12";
            title.textContent = this.data.sectionTitle;
            container.appendChild(title);
        }

        // 2. Grid
        const grid = document.createElement('div');
        grid.className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6";
        
        this.data.segments.forEach(seg => {
            const card = new SegmentCardComponent(seg);
            grid.appendChild(card.render());
        });

        container.appendChild(grid);

        return container;
    }
}