// Utility to toggle dark mode by adding/removing a 'dark' class on <body>
export function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");
  // Optionally persist preference
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Initialize theme on page load
export function initializeDarkMode() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
