export class CourseListComponent {
    constructor(title, courses) {
        this.title = title;
        this.courses = courses;
    }

    render() {
        if (!this.courses || this.courses.length === 0) return document.createElement('div');

        const container = document.createElement('div');
        container.className = "max-w-4xl mx-auto mt-16";

        if (this.title) {
            const heading = document.createElement('h2');
            heading.className = "text-3xl font-bold text-white text-center mb-4";
            heading.textContent = this.title;
            container.appendChild(heading);
        }

        const sub = document.createElement('p');
        sub.className = "text-slate-400 text-center mb-10";
        sub.textContent = "Full access to video programs, plus all future updates";
        container.appendChild(sub);

        const list = document.createElement('div');
        list.className = "space-y-8";

        this.courses.forEach(course => {
            const item = document.createElement('div');
            item.className = "glass-panel p-8 rounded-2xl border border-white/5";
            
            const points = course.points ? `
                <div class="grid md:grid-cols-2 gap-y-2 gap-x-4 mt-6">
                    ${course.points.map(p => `
                        <div class="flex items-center text-sm text-slate-300">
                            <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></span>
                            ${p}
                        </div>
                    `).join('')}
                </div>
            ` : '';

            item.innerHTML = `
                <h3 class="text-2xl font-bold text-white mb-3">${course.title}</h3>
                <p class="text-slate-300 leading-relaxed">${course.description}</p>
                ${points}
            `;
            list.appendChild(item);
        });

        container.appendChild(list);
        return container;
    }
}