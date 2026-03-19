// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const text = themeToggle.querySelector('span');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-sun', 'fa-moon');
    text.textContent = 'Dark Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-sun', 'fa-moon');
        text.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
        text.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// Optional: Add smooth scroll for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Console message for recruiter 😎
console.log('%c🔥 NEO GLYPH PORTFOLIO 🔥', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%cLight mode available! Click the toggle button.', 'color: #ff00ff; font-size: 12px;');
