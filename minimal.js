/**
 * Minimal Sketch Style Portfolio Website
 * Main JavaScript file for subtle animations and interactions
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations with subtle settings
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 50
    });

    // Initialize navigation
    initNavigation();
    
    // Initialize skill animations
    initSkillAnimations();
    
    // Initialize project filters
    initProjectFilters();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Add subtle hover effects
    addSubtleHoverEffects();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Change active link on scroll
    const sections = document.querySelectorAll('section');
    let scrollTimeout;
    
    function highlightNavOnScroll() {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            const scrollY = window.pageYOffset;
            
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`);
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink?.classList.add('active');
                } else {
                    navLink?.classList.remove('active');
                }
            });
        }, 50);
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Add subtle shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    if (scrollToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('active');
            } else {
                scrollToTopButton.classList.remove('active');
            }
        });
        
        // Scroll to top when clicked
        scrollToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize skill animations
 */
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-level .skill-bar');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                const width = bar.parentElement.getAttribute('data-width');
                if (width) {
                    bar.style.width = width;
                }
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Initial check
}

/**
 * Initialize project filters
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-card');
    
    if (filterButtons.length && projectItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

/**
 * Initialize contact form
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';
            
            setTimeout(() => {
                showFormMessage('Your message has been sent successfully!', 'success');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.innerHTML = 'Send Message';
            }, 1500);
        });
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Add message to form
        contactForm.appendChild(messageElement);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
}

/**
 * Initialize scroll animations
 */
function initScrollAnimations() {
    // Subtle fade-in for sections
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Add subtle hover effects
 */
function addSubtleHoverEffects() {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Add CSS for subtle animations
const minimalStyles = document.createElement('style');
minimalStyles.textContent = `
    /* Subtle animations */
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.in-view {
        opacity: 1;
        transform: translateY(0);
    }
    
    .navbar.scrolled {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
    }
    
    .project-card, .btn {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .form-message {
        padding: 12px;
        margin-top: 15px;
        border-radius: 0;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
    }
    
    .form-message.success {
        background-color: rgba(0, 0, 0, 0.05);
        color: #000;
        border-left: 3px solid #000;
    }
    
    .form-message.error {
        background-color: rgba(220, 53, 69, 0.1);
        color: #dc3545;
        border-left: 3px solid #dc3545;
    }
`;

document.head.appendChild(minimalStyles);
