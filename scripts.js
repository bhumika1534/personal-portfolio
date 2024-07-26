// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const elements = document.querySelectorAll('.animate__animated');

// Function to handle scroll events and add animations
function handleScroll() {
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // Distance from the bottom of the viewport
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('animate__fadeIn');
        } else {
            el.classList.remove('animate__fadeIn');
        }
    });
}

// JavaScript for logging clicks on social media icons (optional)
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        console.log(`Clicked on ${this.querySelector('img').alt}`);
    });
});


// Add scroll event listener
window.addEventListener('scroll', handleScroll);
// Initial check to animate elements on page load
handleScroll();
