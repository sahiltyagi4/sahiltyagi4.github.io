const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for the theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Keep anchor-link targets from being hidden under the sticky header
// by tracking its real (responsive) height in a CSS variable.
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
    const updateHeaderHeight = () => {
        document.documentElement.style.setProperty('--header-height', `${siteHeader.offsetHeight}px`);
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('load', updateHeaderHeight);
}