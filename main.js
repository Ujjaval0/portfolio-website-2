/**
 * Data Science Portfolio Website
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
    
    // Initialize skill animations
    initSkillAnimations();
    
    // Initialize project filters
    initProjectFilters();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Enhanced home page animations
    enhanceHomePageAnimations();
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
    
    // Change active link on scroll with optimized performance
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
        }, 50); // Small timeout for better performance
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
}

/**
 * Initialize skill animations
 * Animates skill level bars when they come into view
 */
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-level .skill-bar');
    
    // Function to animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                const width = bar.parentElement.getAttribute('data-width');
                if (width) {
                    gsap.to(bar, {
                        width: width,
                        duration: 1.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            // Add a subtle pulse animation after completion
                            gsap.to(bar, {
                                boxShadow: '0 0 15px rgba(114, 137, 253, 0.7)',
                                repeat: 1,
                                yoyo: true,
                                duration: 0.5
                            });
                        }
                    });
                }
            }
        });
    }
    
    // Initial animation
    animateSkillBars();
    
    // Animate on scroll
    window.addEventListener('scroll', animateSkillBars);
}

/**
 * Initialize project filters functionality
 * Handles filtering of project cards based on category
 */
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Create stagger animation timeline
            const timeline = gsap.timeline();
            
            // Filter projects with enhanced animations
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    // Filter matched - show with stagger animation
                    timeline.to(card, {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        duration: 0.5, 
                        ease: 'power2.out',
                        clearProps: 'all',
                        display: 'block'
                    }, '<0.1');
                } else {
                    // No match - hide with animation
                    timeline.to(card, {
                        scale: 0.95,
                        opacity: 0,
                        y: 20,
                        duration: 0.4,
                        ease: 'power2.in',
                        display: 'none'
                    }, '<0.1');
                }
            });
        });
    });
}

/**
 * Initialize contact form
 * Handles form validation and submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Create input animation on focus
        const inputFields = contactForm.querySelectorAll('input, textarea');
        
        inputFields.forEach(field => {
            // Add focus animation
            field.addEventListener('focus', () => {
                field.parentElement.classList.add('focused');
            });
            
            // Remove focus animation when not focused
            field.addEventListener('blur', () => {
                if (field.value.trim() === '') {
                    field.parentElement.classList.remove('focused');
                }
            });
            
            // Check initial state (for browser autofill)
            if (field.value.trim() !== '') {
                field.parentElement.classList.add('focused');
            }
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission with smooth animation
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Disable form
            submitButton.disabled = true;
            inputFields.forEach(field => field.disabled = true);
            
            // Animate button
            gsap.to(submitButton, {
                scale: 0.95,
                duration: 0.2,
                ease: 'power1.inOut',
                onComplete: () => {
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    
                    // Simulate server request with success animation
                    setTimeout(() => {
                        gsap.to(submitButton, {
                            scale: 1.05,
                            backgroundColor: 'var(--success-color)',
                            duration: 0.3,
                            ease: 'power2.out',
                            onComplete: () => {
                                submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
                                
                                // Show success message
                                showFormMessage('Your message has been sent successfully!', 'success');
                                
                                // Reset form
                                setTimeout(() => {
                                    contactForm.reset();
                                    inputFields.forEach(field => field.disabled = false);
                                    submitButton.textContent = originalText;
                                    submitButton.disabled = false;
                                    
                                    // Reset button style
                                    gsap.to(submitButton, {
                                        scale: 1,
                                        backgroundColor: 'var(--primary-color)',
                                        duration: 0.3,
                                        ease: 'power2.inOut'
                                    });
                                }, 2000);
                            }
                        });
                    }, 1500);
                }
            });
        });
    }
    
    // Check if email is valid
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show form messages with animation
    function showFormMessage(message, type) {
        // Check if message element already exists
        let messageElement = document.querySelector('.form-message');
        
        // If not, create a new one
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            contactForm.appendChild(messageElement);
        }
        
        // Set class based on message type
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        // Animate message
        gsap.fromTo(
            messageElement, 
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
        
        // Remove message after 5 seconds with fade out
        setTimeout(() => {
            gsap.to(messageElement, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => messageElement.remove()
            });
        }, 5000);
    }
}

/**
 * Initialize scroll animations
 * Applies styles based on scroll position
 */
function initScrollAnimations() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero');
    let lastScrollTop = 0;
    
    // Enhanced navbar effect on scroll
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class based on scroll position
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll direction (down/up)
        if (scrollTop > 300) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Parallax effect for hero section
        if (heroSection) {
            const yPos = -scrollTop * 0.2;
            heroSection.style.backgroundPosition = `50% ${yPos}px`;
        }
    }
    
    // Run on load
    handleScroll();
    
    // Listen for scroll with optimized performance
    window.addEventListener('scroll', function() {
        requestAnimationFrame(handleScroll);
    });
    
    // Enhanced smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize hero section animations
 */
function initHeroAnimations() {
    // Hero text reveal animation
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero .subtitle', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.hero .title', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero .description', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero .cta-buttons', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-image', {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.scroll-down', {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4');
    
    // Create continuous floating animations for the data visualization dots
    gsap.to('.dot-1', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });
    
    gsap.to('.dot-2', {
        y: -15,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.3
    });
    
    gsap.to('.dot-3', {
        y: -25,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5
    });
    
    gsap.to('.dot-4', {
        y: -18,
        duration: 2.7,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.1
    });
    
    // Add subtle glow pulse to hero elements
    gsap.to('.shape', {
        boxShadow: '0 0 80px rgba(74, 108, 255, 0.6)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Add subtle highlight animation to text
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(function(highlight) {
        gsap.to(highlight, {
            backgroundPosition: '200% center',
            duration: 8,
            repeat: -1,
            ease: 'none'
        });
    });
}

/**
 * Enhances the home page animations with more impressive visual effects
 */
function enhanceHomePageAnimations() {
    // Create a master timeline for coordinated animations
    const masterTimeline = gsap.timeline();
    
    // Hero text animations with staggered effect
    masterTimeline.from('.hero .subtitle', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from('.hero .title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero .description', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6')
    .from('.hero .cta-buttons', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
    }, '-=0.6');
    
    // Floating animation for the data visualization dots
    gsap.to('.data-visualization .dot', {
        y: '-=15',
        duration: 2,
        ease: 'sine.inOut',
        stagger: 0.2,
        repeat: -1,
        yoyo: true
    });
    
    // Glowing effect for the dots
    gsap.to('.data-visualization .dot', {
        boxShadow: '0 0 15px var(--primary-color)',
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
    });
    
    // Subtle rotation for the hero shape
    gsap.to('.hero-image .shape', {
        rotation: 10,
        duration: 12,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });
    
    // Connection lines animation
    gsap.to('.data-visualization .line', {
        opacity: 0.8,
        duration: 1.5,
        ease: 'sine.inOut',
        stagger: 0.2,
        repeat: -1,
        yoyo: true
    });
    
    // Scroll down indicator animation
    gsap.to('.scroll-down', {
        y: 10,
        duration: 1.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
    });
    
    // Add a subtle parallax effect on mouse move
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            gsap.to('.hero-image', {
                x: moveX,
                y: moveY,
                duration: 1,
                ease: 'power1.out'
            });
            
            gsap.to('.data-visualization', {
                x: moveX * 1.5,
                y: moveY * 1.5,
                duration: 1,
                ease: 'power1.out'
            });
        });
    }
}

// Enhanced form styling with dynamic focus effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .form-message {
        padding: 12px;
        margin-top: 15px;
        border-radius: var(--border-radius-md);
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        box-shadow: var(--shadow-sm);
    }
    
    .form-message.success {
        background-color: rgba(35, 206, 107, 0.1);
        color: var(--success-color);
        border: 1px solid rgba(35, 206, 107, 0.2);
    }
    
    .form-message.error {
        background-color: rgba(220, 53, 69, 0.1);
        color: #dc3545;
        border: 1px solid rgba(220, 53, 69, 0.2);
    }
    
    .form-group {
        position: relative;
        margin-bottom: var(--spacing-sm);
    }
    
    .form-group.focused input,
    .form-group.focused textarea {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(74, 108, 255, 0.1);
    }
    
    .btn-primary:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

document.head.appendChild(styleSheet);

// Add CSS for theme transition effects
const themeStyleSheet = document.createElement('style');
themeStyleSheet.textContent = `
    /* Theme transition effects */
    html {
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    
    .theme-ripple {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--primary-color);
        opacity: 0.3;
        transform: scale(0);
        transition: transform 1s ease-out, opacity 1s ease-out;
        z-index: 9999;
        pointer-events: none;
    }
    
    /* Enhanced animations for elements */
    .btn {
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                  background-color 0.3s ease, 
                  box-shadow 0.3s ease, 
                  color 0.3s ease;
    }
    
    .skill-bar {
        transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                  background-color 0.5s ease;
    }
    
    .skill-bar > div {
        transition: width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  background 0.5s ease,
                  box-shadow 0.5s ease;
    }
    
    img, .card, .project-card, .timeline-content, .contact-item, .social-link {
        transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                  box-shadow 0.5s ease,
                  background 0.5s ease,
                  border-color 0.5s ease;
    }
    
    .hero, .about, .skills, .projects, .experience, .contact, .footer {
        transition: background 0.5s ease,
                  background-color 0.5s ease;
    }
    
    .dot, .line, .shape {
        transition: background 0.5s ease,
                  background-color 0.5s ease,
                  box-shadow 0.5s ease;
    }
`;

document.head.appendChild(themeStyleSheet);