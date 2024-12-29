const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check local storage for the theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button text based on the theme
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});