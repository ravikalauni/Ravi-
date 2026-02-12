document.addEventListener('DOMContentLoaded', () => {
    // Search functionality on Landing Page
    const searchBtn = document.querySelector('button.bg-primary');
    const titleInput = document.querySelector('input[placeholder="Job Title or Keyword"]');
    const locInput = document.querySelector('input[placeholder="Location (City or Zip)"]');

    if (searchBtn) {
        searchBtn.onclick = (e) => {
            e.preventDefault(); // Prevent default if in form
            const query = titleInput ? encodeURIComponent(titleInput.value) : '';
            const loc = locInput ? encodeURIComponent(locInput.value) : '';

            window.location.href = `search.html?q=${query}&loc=${loc}`;
        };
    }
});
