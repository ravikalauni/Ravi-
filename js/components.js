// js/components.js

// Navigation Bar
const navbarHTML = `
<nav class="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-2 cursor-pointer" onclick="window.location.href='index.html'">
                    <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-icons">work</span>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LocalHire</span>
                </div>
                <div class="hidden md:flex items-center gap-6">
                    <a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="search.html">Find Jobs</a>
                    <a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="employer.html">Companies</a>
                    <a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="dashboard.html">Dashboard</a>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <a class="text-sm font-medium text-slate-600 dark:text-slate-400" href="#">Login</a>
                <button class="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-primary/20">
                    Post a Job
                </button>
            </div>
        </div>
    </div>
</nav>
`;

// Footer
const footerHTML = `
<footer class="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
            <div class="col-span-2">
                <div class="flex items-center gap-2 mb-6">
                    <div class="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-icons text-sm">work</span>
                    </div>
                    <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LocalHire</span>
                </div>
                <p class="text-slate-500 max-w-sm">The leading job portal for finding local opportunities. We connect passionate talent with the best neighborhood businesses.</p>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-6">For Candidates</h4>
                <ul class="space-y-4 text-sm text-slate-500">
                    <li><a class="hover:text-primary" href="search.html">Browse Jobs</a></li>
                    <li><a class="hover:text-primary" href="#">Job Alerts</a></li>
                    <li><a class="hover:text-primary" href="dashboard.html">Candidate Dashboard</a></li>
                    <li><a class="hover:text-primary" href="#">Salaries</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-6">For Employers</h4>
                <ul class="space-y-4 text-sm text-slate-500">
                    <li><a class="hover:text-primary" href="employer.html">Post a Job</a></li>
                    <li><a class="hover:text-primary" href="#">Pricing Plans</a></li>
                    <li><a class="hover:text-primary" href="#">Recruiting Solutions</a></li>
                    <li><a class="hover:text-primary" href="#">Employer Brand</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
                <ul class="space-y-4 text-sm text-slate-500">
                    <li><a class="hover:text-primary" href="#">About Us</a></li>
                    <li><a class="hover:text-primary" href="#">Contact Support</a></li>
                    <li><a class="hover:text-primary" href="#">Privacy Policy</a></li>
                    <li><a class="hover:text-primary" href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div class="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm text-slate-400">© Ravi Prasad Kalauni. All rights reserved.</p>
            <div class="flex items-center gap-6">
                <a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-icons">facebook</span></a>
                <a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-icons">alternate_email</span></a>
                <a class="text-slate-400 hover:text-primary transition-colors" href="#"><span class="material-icons">public</span></a>
            </div>
        </div>
    </div>
</footer>
`;

// Inject components
document.addEventListener('DOMContentLoaded', () => {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
});
