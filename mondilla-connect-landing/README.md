# Mondilla Connect Landing Page

A modern, responsive landing page built with React, Vite, and Tailwind CSS featuring a robust dark mode system and smooth animations.

## 🚀 Project Overview

Mondilla Connect is a professional landing page showcasing team collaboration tools. The project features a completely rewritten dark mode system that eliminates FART (Flash of inAccurate coloR Theme) issues, ensuring a seamless user experience across light and dark themes.

## ✨ Key Features

### 🌓 Advanced Dark Mode System
- **Flash of inAccurate coloR Theme-Free Experience**: Completely eliminated flash issues on page refresh
- **Instant Theme Application**: Theme is applied before any rendering occurs
- **System Preference Detection**: Automatically respects user's system theme preference
- **Persistent Storage**: Remembers user's theme choice across sessions

### 🎨 Modern UI Components
- **Responsive Header**: Navigation with animated hover underlines
- **Hero Section**: Eye-catching introduction with call-to-action
- **Features Grid**: Interactive feature cards with hover effects
- **Pricing Table**: Clean pricing plans with highlighted popular option
- **Contact Form**: Validated contact form with error handling
- **Footer**: Comprehensive footer with social links and newsletter signup

### 🎭 Smooth Animations
- **Framer Motion**: Smooth page transitions and scroll animations
- **Hover Effects**: Interactive elements with polished hover states
- **Navigation Underlines**: Animated underlines on nav link hover
- **Loading Animations**: Staggered animations for better UX

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Hamburger Menu**: Clean mobile navigation
- **Flexible Layouts**: Adapts seamlessly to different screen sizes

## 🛠️ Technical Implementation

### Dark Mode Architecture
```javascript
// Advanced Theme Manager with subscription system
class ThemeManager {
  - Singleton pattern for consistent state
  - Event-driven architecture
  - Automatic system preference detection
  - Persistent storage with unique keys
}
```

### CSS Variable System
```css
:root {
  --bg-primary: #f6fbff;      /* Main backgrounds */
  --bg-secondary: #ffffff;     /* Card backgrounds */
  --bg-tertiary: #f8fafc;     /* Button backgrounds */
  --text-primary: #1f2937;    /* Main text */
  --text-secondary: #6b7280;  /* Secondary text */
  --border-primary: #e5e7eb;  /* Border colors */
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Rukkyoo/Mondilla-connect

# Navigate to project directory
cd mondilla-connect-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
mondilla-connect-landing/
├── public/                 # Static assets
│   ├── logo.png           # Light mode logo
│   ├── logo-white.png     # Dark mode logo
│   └── hero.jpg           # Hero section image
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation with dark mode toggle
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Features.jsx   # Features showcase
│   │   ├── Pricing.jsx    # Pricing plans
│   │   ├── ContactForm.jsx # Contact form
│   │   ├── Footer.jsx     # Footer section
│   │   └── HamburgerMenu.jsx # Mobile menu
│   ├── css/
│   │   └── index.css      # Global styles & CSS variables
│   ├── js/
│   │   └── darkModeToggle.jsx # Theme management system
│   ├── App.jsx            # Main application
│   └── main.jsx           # Application entry point
├── index.html             # HTML template with theme script
└── vite.config.js         # Vite configuration
```

## 🎯 Recent Improvements

### Dark Mode System Rewrite
- ✅ Eliminated FART (Flash of inAccurate coloR Theme)
- ✅ Implemented CSS-first approach with instant theme application
- ✅ Added system preference detection and persistence

### Code Quality Enhancements
- ✅ Replaced all hardcoded dark mode classes with CSS variables
- ✅ Implemented consistent theming across all components
- ✅ Optimized CSS with semantic color variables
- ✅ Removed redundant styling and improved maintainability

### UI/UX Improvements
- ✅ Added animated hover underlines to navigation links
- ✅ Enhanced button and form styling consistency
- ✅ Improved responsive design and mobile experience
- ✅ Added smooth transitions and micro-interactions

## 🛡️ Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Vite** - For the fast build tool

---

**Built with ❤️ by Rukkyoo**