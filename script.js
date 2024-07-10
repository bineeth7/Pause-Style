// script.js

document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme) {
        document.body.classList.add(preferredTheme);
    }
});
