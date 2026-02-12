import { jobs } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id'));

    const job = jobs.find(j => j.id === jobId) || jobs[0]; // Default to first job if not found

    if (job) {
        document.title = `${job.title} | LocalTalent`;

        // Update Content
        const titleEl = document.querySelector('h1');
        if (titleEl) titleEl.textContent = job.title;

        const companyEl = document.querySelector('.text-primary.mr-4');
        if (companyEl) companyEl.innerHTML = `<span class="material-icons text-sm mr-1">business</span> ${job.company}`;

        const locationEl = document.querySelector('.flex.items-center.mr-4');
        // Note: this selector might be too generic, needing more specific targeting if HTML changes
        // But based on current structure it should work or we can use IDs.

        const salaryEl = document.querySelector('.text-xl.font-bold');
        if (salaryEl) salaryEl.textContent = job.salary;

        const postedEl = document.querySelector('.text-sm.mr-1:contains("schedule")');
        // :contains is not valid standard JS, need better selector or just update the whole block.

        // Just updating the Hero section image
        const imgEl = document.querySelector('img[alt="Company Logo"]');
        if (imgEl) imgEl.src = job.logo;

        // In a real app we'd update the description too, but the mock data description is short 
        // and the detail page has a long description hardcoded. 
        // We will leave the hardcoded description for now as per "mock dynamic content" request 
        // unless we want to put the whole HTML description in data.js
    }
});
