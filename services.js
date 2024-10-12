// Select the toggle button and navbar links
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar');

// Toggle the 'active' class when the toggle button is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
