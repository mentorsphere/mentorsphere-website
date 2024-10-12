// Select the toggle button and navbar links
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar');

// Toggle the 'active' class when the toggle button is clicked
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


var typed = new Typed(".autotype",{
    strings: ["delegate in your committee","and be the delegate everyone looks up to"],
    typeSpeed:100,
    backSpeed: 90,
    loop:true
})

