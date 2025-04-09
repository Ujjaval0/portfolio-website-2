/**
 * Colosseum Breakout Hackathon Website
 * Main JavaScript file for animations and interactions
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false
    });

    // Initialize navigation
    initNavigation();
});

/**
 * Initialize navigation functionality
 * Handles mobile menu toggle and scroll behavior
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu with smooth animation
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Animate nav links when menu opens
            if (navLinks.classList.contains('active')) {
                navLinksItems.forEach((link, index) => {
                    gsap.fromTo(
                        link, 
                        { opacity: 0, y: 20 }, 
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.3, 
                            delay: 0.1 * index,
                            ease: 'power2.out'
                        }
                    );
                });
            }
        });
    }
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
