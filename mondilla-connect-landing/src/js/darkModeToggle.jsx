class ThemeManager {
  constructor() {
    this.storageKey = 'mondilla-theme';
    this.callbacks = new Set();
    this.currentTheme = this.getInitialTheme();
  }

  getInitialTheme() {
    if (typeof window === 'undefined') return 'light';
    
    const saved = localStorage.getItem(this.storageKey);
    if (saved) return saved;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') return;
    
    this.currentTheme = theme;
    
    // Update DOM immediately
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
    
    // Update data attribute
    html.setAttribute('data-theme', theme);
    
    // Store preference
    localStorage.setItem(this.storageKey, theme);
    
    // Notify subscribers
    this.callbacks.forEach(callback => callback(theme));
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }

  getTheme() {
    return this.currentTheme;
  }

  isDark() {
    return this.currentTheme === 'dark';
  }

  subscribe(callback) {
    this.callbacks.add(callback);
    // Call immediately with current theme
    callback(this.currentTheme);
    
    // Return unsubscribe function
    return () => this.callbacks.delete(callback);
  }

  // Initialize theme on page load
  initialize() {
    this.setTheme(this.currentTheme);
    
    // Listen for system theme changes
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Only update if no manual preference is stored
        if (!localStorage.getItem(this.storageKey)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}

// Create singleton instance
const themeManager = new ThemeManager();

// Export functions for backward compatibility
export function toggleDarkMode() {
  themeManager.toggleTheme();
}

export function initializeDarkMode() {
  themeManager.initialize();
}

export function getCurrentTheme() {
  return themeManager.getTheme();
}

export function isDarkMode() {
  return themeManager.isDark();
}

export function subscribeToTheme(callback) {
  return themeManager.subscribe(callback);
}

// Auto-initialize
if (typeof window !== 'undefined') {
  themeManager.initialize();
}

export default themeManager;