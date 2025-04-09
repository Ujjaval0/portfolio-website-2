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

## Getting Started

1. Clone this repository or download the files
2. Open `index.html` in your browser to view the website
3. Customize the content in `index.html` to reflect your own information
4. Add your project images to the `src/assets/` directory
5. Modify colors and styles in `src/styles/main.css` if desired

## Customization

### Colors and Themes

You can easily customize the color scheme by modifying the CSS variables in the `:root` section of `src/styles/main.css`. The website includes both light and dark theme variables:

```css
:root {
    /* Light theme (default) */
    --primary-color: #4a6cff;
    --primary-hover: #3a5bf0;
    --secondary-color: #8256e8;
    --accent-color: #00e5ff;
    /* other variables */
}

[data-theme="dark"] {
    /* Dark theme */
    --primary-color: #6a8cff;
    --primary-hover: #5a7bf0;
    --secondary-color: #9266f8;
    --accent-color: #20f5ff;
    --light-color: #121224; /* Background becomes dark */
    --dark-color: #f8f9ff;  /* Text becomes light */
    /* other variables */
}
```

### Font Family

To change the font family, update the Google Fonts link in the `<head>` of `index.html` and change the font variables in `src/styles/main.css`.

### Project Images

Replace the placeholder project images in the `src/assets/` directory with your own project screenshots or images.

## License

This project is available as open source under the terms of the MIT License.

## Author

Ujjaval Bhardwaj - Data Scientist

## Acknowledgments

- FontAwesome for icons
- Google Fonts for typography
- AOS library for scroll animations
- GSAP for advanced animations