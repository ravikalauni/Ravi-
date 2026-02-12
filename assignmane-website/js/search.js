import { jobs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Determine if we are on the search page
    const jobListContainer = document.querySelector('.space-y-4');
    const resultCountHeading = document.querySelector('h1.text-2xl');

    // Parse URL params for initial filter
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q') || '';
    const initialLocation = urlParams.get('loc') || '';

    // If search inputs exist, pre-fill them
    const keywordInput = document.querySelector('input[placeholder*="Job title"]');
    const locationInput = document.querySelector('input[placeholder*="Austin"]'); // Slightly different placeholder

    if (keywordInput && initialQuery) keywordInput.value = initialQuery;
    if (locationInput && initialLocation) locationInput.value = initialLocation;

    function renderJobs(filterText = '', filterLoc = '') {
        if (!jobListContainer) return;

        jobListContainer.innerHTML = '';

        const filteredJobs = jobs.filter(job => {
            const matchesKeyword = job.title.toLowerCase().includes(filterText.toLowerCase()) ||
                job.company.toLowerCase().includes(filterText.toLowerCase());
            const matchesLoc = job.location.toLowerCase().includes(filterLoc.toLowerCase());
            return matchesKeyword && matchesLoc;
        });

        // Update count
        if (resultCountHeading) {
            resultCountHeading.textContent = `${filteredJobs.length} Jobs Found`;
        }

        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:shadow-xl transition-all duration-300 group';
            jobCard.innerHTML = `
                <div class="flex flex-col lg:flex-row gap-6">
                    <div class="flex-1">
                        <div class="flex items-start justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <img src="${job.logo}" alt="${job.company}" class="w-full h-full object-cover rounded-lg">
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold group-hover:text-primary transition-colors leading-tight">${job.title}</h3>
                                    <p class="text-slate-500 text-sm font-medium">${job.company} • ${job.location}</p>
                                </div>
                            </div>
                            ${job.isNew ? '<span class="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded font-semibold uppercase tracking-wider">New</span>' : ''}
                        </div>
                        <div class="mt-4 flex flex-wrap gap-4 text-sm">
                            <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                <span class="material-icons text-xs">local_shipping</span>
                                <span>${job.distance}</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                <span class="material-icons text-xs">monetization_on</span>
                                <span>${job.salary}</span>
                            </div>
                            <div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                                <span class="material-icons text-xs">history</span>
                                <span>${job.posted}</span>
                            </div>
                        </div>
                        <p class="mt-4 text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                            ${job.description}
                        </p>
                        <div class="mt-6 flex items-center gap-3">
                            <button onclick="window.location.href='detail.html?id=${job.id}'" class="bg-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors">Apply Now</button>
                            <button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-primary transition-colors">
                                <span class="material-icons text-sm">bookmark_border</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            jobListContainer.appendChild(jobCard);
        });
    }

    // Attach listeners
    const findButton = document.querySelector('button.bg-primary');
    if (findButton) {
        findButton.addEventListener('click', () => {
            const k = keywordInput ? keywordInput.value : '';
            const l = locationInput ? locationInput.value : '';
            renderJobs(k, l);
        });
    }

    // Initial Render
    renderJobs(initialQuery, initialLocation);
});
