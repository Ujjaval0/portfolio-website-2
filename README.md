# Data Science Portfolio Website

A modern, responsive portfolio website designed for Data Scientists to showcase their skills, projects, and professional experience. Features a dark/light theme toggle, fixed navigation, and enhanced animations.

## Features

- Fully responsive design that works on mobile, tablet, and desktop devices
- Dark/light theme toggle with smooth transition animations
- Fixed navigation header that stays in place while scrolling
- Modern UI with subtle animations and transitions
- Interactive sections including:
  - Hero section with animated data visualization
  - About section with professional information
  - Skills section with visual skill level indicators
  - Projects section with filtering capability
  - Experience timeline
  - Contact form with validation
- Social media integration
- Optimized for performance and accessibility

## Technologies Used

- HTML5, CSS3, JavaScript (ES6+)
- AOS (Animate On Scroll) for scroll animations
- GSAP (GreenSock Animation Platform) for advanced animations
- FontAwesome for icons
- Google Fonts
- CSS Variables for theming

## Project Structure

```
portfolio/
├── index.html               # Main HTML file
├── README.md                # Project documentation
├── DEPLOYMENT.md            # Deployment instructions
├── src/
│   ├── assets/              # Images and other static assets
│   │   ├── favicon.ico      # Site favicon
│   │   ├── profile.jpg      # Profile image
│   │   └── project-*.jpg    # Project images
│   ├── styles/              # CSS stylesheets
│   │   ├── main.css         # Base styles, variables, and theme settings
│   │   ├── layout.css       # Layout styles for navigation, hero, and theme toggle
│   │   └── sections.css     # Styles for all content sections
│   └── scripts/             # JavaScript files
│       └── main.js          # Main JavaScript with all interactions and theme functionality
```

## Website Structure

### HTML Structure

1. **Navigation Bar**
   - Logo
   - Navigation links
   - Theme toggle button
   - Mobile menu hamburger

2. **Hero Section**
   - Main heading and subheading
   - Call-to-action buttons
   - Animated data visualization

3. **About Section**
   - Profile image with experience badge
   - Personal bio
   - Statistics/highlights
   - Resume download button

4. **Skills Section**
   - Technical skills categories
   - Skill bars with proficiency levels
   - Data Science & ML, Programming, Frameworks & Tools categories

5. **Projects Section**
   - Project filtering
   - Project cards with images
   - Project details and links

6. **Experience Section**
   - Timeline of work and education
   - Position details and achievements

7. **Contact Section**
   - Contact information
   - Social media links
   - Contact form

8. **Footer**
   - Copyright information
   - Quick navigation links
   - Scroll to top button

### CSS Structure

1. **main.css**
   - CSS variables (colors, fonts, spacing)
   - Dark/light theme variables
   - Base styles and resets
   - Typography
   - Buttons and common components
   - Responsive breakpoints

2. **layout.css**
   - Navigation styles
   - Hero section layout
   - Theme toggle button
   - Responsive navigation

3. **sections.css**
   - Styles for all content sections
   - Animation effects
   - Section-specific components

### JavaScript Structure

**main.js** contains several key functions:

- `initNavigation()`: Handles navigation functionality
- `initScrollEffects()`: Applies styles based on scroll position
- `initThemeToggle()`: Manages theme switching functionality
- `initProjectsFilter()`: Handles project filtering
- `initContactForm()`: Form validation and submission
- `initSkillAnimations()`: Animates skill bars
- `initParallaxEffects()`: Creates responsive movement effects
- `initHeroAnimations()`: Advanced animations for hero section
- `initScrollToTop()`: Scroll to top functionality



## Acknowledgments

- FontAwesome for icons
- Google Fonts for typography
- AOS library for scroll animations
- GSAP for advanced animations
