// script.js
const signUpButton = document.getElementById('signUpOverlay');
const signInButton = document.getElementById('signInOverlay');
const container = document.querySelector('.container');
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
