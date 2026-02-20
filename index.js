
// Data
const SKILLS = [
    { category: 'Frontend', items: [{name: 'React', val: 95}, {name: 'Tailwind', val: 98}, {name: 'TypeScript', val: 90}] },
    { category: 'Backend', items: [{name: 'Node.js', val: 92}, {name: 'Python', val: 88}, {name: 'Postgres', val: 85}] },
    { category: 'Other', items: [{name: 'UI Design', val: 94}, {name: 'BCA Scholar', val: 99}, {name: 'DevOps', val: 80}] }
];

const PROJECTS = [
    { title: 'Brixton LMS', cat: 'Education', desc: 'A learning management system for students.' },
    { title: 'Student Portal', cat: 'Dashboard', desc: 'Centralized portal for academic resources.' },
    { title: 'College Web', cat: 'Web App', desc: 'Main institutional website for Brixton.' }
];

// Theme Management
const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
};

const updateThemeIcon = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = isDark ? 
        `<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>` : 
        `<svg class="w-5 h-5 text-zinc-600" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`;
    
    document.getElementById('theme-icon').innerHTML = icon;
    document.getElementById('theme-toggle-mobile').innerHTML = icon;
};

// Binary Clock
const initClock = () => {
    const labelsContainer = document.getElementById('clock-labels');
    for (let i = 1; i <= 12; i++) {
        const angle = (i * 30) - 90;
        const binary = i.toString(2).padStart(4, '0');
        const div = document.createElement('div');
        div.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full';
        div.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        div.innerHTML = `<span class="hour-binary absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold opacity-30 transition-all" style="transform: rotate(${-angle}deg)" data-hour="${i}">${binary}</span>`;
        labelsContainer.appendChild(div);
    }
};

const updateClock = () => {
    const now = new Date();
    const h = now.getHours() % 12 || 12;
    const m = now.getMinutes();
    const s = now.getSeconds();

    document.getElementById('digital-time').textContent = now.toLocaleTimeString([], { hour12: true });
    
    const binaryH = h.toString(2).padStart(4, '0');
    const binaryM = m.toString(2).padStart(6, '0');
    const binaryS = s.toString(2).padStart(6, '0');
    
    document.getElementById('binary-time-str').innerHTML = `<span>${binaryH}</span>:<span>${binaryM}</span>:<span class="text-secondary">${binaryS}</span>`;

    // Highlight current hour label
    document.querySelectorAll('.hour-binary').forEach(el => {
        const hour = parseInt(el.dataset.hour);
        if (hour === h) {
            el.classList.add('text-primary', 'opacity-100', 'scale-125');
        } else {
            el.classList.remove('text-primary', 'opacity-100', 'scale-125');
        }
    });
};

// Render Data
const renderSkills = () => {
    const grid = document.getElementById('skills-grid');
    SKILLS.forEach(group => {
        const groupEl = document.createElement('div');
        groupEl.className = 'bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm';
        groupEl.innerHTML = `
            <h3 class="text-xl font-bold mb-6 flex items-center gap-2"><span class="w-1.5 h-6 bg-primary rounded-full"></span>${group.category}</h3>
            <div class="space-y-4">
                ${group.items.map(s => `
                    <div class="space-y-1">
                        <div class="flex justify-between text-sm font-semibold">
                            <span>${s.name}</span><span>${s.val}%</span>
                        </div>
                        <div class="skill-bar-bg"><div class="skill-bar-fill" style="width: ${s.val}%"></div></div>
                    </div>
                `).join('')}
            </div>
        `;
        grid.appendChild(groupEl);
    });
};

const renderProjects = () => {
    const grid = document.getElementById('projects-grid');
    PROJECTS.forEach(p => {
        const card = document.createElement('div');
        card.className = 'project-card p-6';
        card.innerHTML = `
            <div class="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg mb-4 flex items-center justify-center text-primary/20 font-bold text-2xl">Project Preview</div>
            <p class="text-xs font-bold text-primary uppercase tracking-widest mb-1">${p.cat}</p>
            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
            <p class="text-zinc-500 dark:text-zinc-400 text-sm">${p.desc}</p>
        `;
        grid.appendChild(card);
    });
};

// Setup
document.addEventListener('DOMContentLoaded', () => {
    // Scroll handling for Nav
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/80', 'dark:bg-zinc-950/80', 'backdrop-blur-md', 'shadow-sm');
        } else {
            nav.classList.remove('bg-white/80', 'dark:bg-zinc-950/80', 'backdrop-blur-md', 'shadow-sm');
        }
    });

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
    updateThemeIcon();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

    // Initialize Components
    initClock();
    setInterval(updateClock, 1000);
    updateClock();
    renderSkills();
    renderProjects();

    // Smooth Scroll Helper
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                mobileMenu.classList.add('hidden');
            }
        });
    });
});
