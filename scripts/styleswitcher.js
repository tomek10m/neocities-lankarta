function initStyleSwitcher() {
  // Get only theme links (with both nav-link and themes classes)
  const themeLinks = document.querySelectorAll(".nav-link.themes");

  // Check for saved theme preference
  const savedTheme = sessionStorage.getItem("selectedTheme") || "default";

  // Apply the saved theme
  applyTheme(savedTheme);

  // Set active link
  themeLinks.forEach((link) => {
    if (link.dataset.theme === savedTheme) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Add click event listeners to theme links only
  themeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const selectedTheme = this.dataset.theme;
      applyTheme(selectedTheme);
      themeLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      sessionStorage.setItem("selectedTheme", selectedTheme);
    });
  });

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
  }
}

window.initStyleSwitcher = initStyleSwitcher;

// Optionally, call it once on initial load (for static HTML)
document.addEventListener("DOMContentLoaded", initStyleSwitcher);
