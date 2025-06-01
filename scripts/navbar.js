document.addEventListener("DOMContentLoaded", function () {
  const navbarElement = document.getElementById("navbar");
  if (!navbarElement) return;

  fetch("/sitemap.html")
    .then((response) => response.text())
    .then((html) => {
      // Parse the fetched HTML and extract only the <body> content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const bodyHtml = doc.body.innerHTML;
      navbarElement.insertAdjacentHTML("afterbegin", bodyHtml);

      if (window.initStyleSwitcher) {
        window.initStyleSwitcher();
      }

      // Set the title and navigation links
      function setTitleAndNavigation() {
        const titleElement = document.querySelector("title");
        const pageTitleSpan = document.querySelector(".page-title .title");
        if (titleElement && pageTitleSpan) {
          pageTitleSpan.textContent = titleElement.textContent;
        }

        const firstPageLink = document.getElementById("first-page-link");
        const previousPageLink = document.getElementById("previous-page-link");
        const nextPageLink = document.getElementById("next-page-link");

        if (typeof firstPageUrl !== "undefined" && firstPageLink) {
          firstPageLink.href = firstPageUrl;
        } else if (firstPageLink) {
          firstPageLink.style.display = "none";
        }

        if (typeof previousPageUrl !== "undefined" && previousPageLink) {
          previousPageLink.href = previousPageUrl;
        } else if (previousPageLink) {
          previousPageLink.style.display = "none";
        }

        if (typeof nextPageUrl !== "undefined" && nextPageLink) {
          nextPageLink.href = nextPageUrl;
        } else if (nextPageLink) {
          nextPageLink.style.display = "none";
        }
      }
      setTitleAndNavigation();

      // Main navbar logic
      const hamburgerContainer = document.getElementById("hamburger-container");
      const settingsContainer = document.getElementById("settings-container");
      const mainSidebar = document.getElementById("main-sidebar");
      const settingsSidebar = document.getElementById("settings-sidebar");
      const submenuParents = document.querySelectorAll(".has-submenu");
      const navLinks = document.querySelectorAll("#main-sidebar .nav-link");
      const currentPath = window.location.pathname;

      // Set the active link based on the current path
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
          link.classList.add("active");
          const parentNavItem = link.closest(".nav-item");
          if (parentNavItem) {
            parentNavItem.classList.add("active");
            // If it's a submenu, also open it
            if (parentNavItem.classList.contains("has-submenu")) {
              const submenu = parentNavItem.querySelector(".submenu");
              if (submenu) submenu.classList.add("open");
            }
          }
        }
      });

      // Toggle main sidebar
      if (hamburgerContainer && mainSidebar && settingsSidebar) {
        hamburgerContainer.addEventListener("click", function (e) {
          e.stopPropagation();
          mainSidebar.classList.toggle("open");
          // Close settings sidebar when opening main sidebar
          if (mainSidebar.classList.contains("open")) {
            settingsSidebar.classList.remove("open");
          }
        });
      }

      // Toggle settings sidebar
      if (settingsContainer && settingsSidebar && mainSidebar) {
        settingsContainer.addEventListener("click", function (e) {
          e.stopPropagation();
          settingsSidebar.classList.toggle("open");
          // Close main sidebar when opening settings sidebar
          if (settingsSidebar.classList.contains("open")) {
            mainSidebar.classList.remove("open");
          }
        });
      }

      // Modified submenu toggle logic
      submenuParents.forEach((parent) => {
        const link = parent.querySelector(".nav-link");
        const submenu = parent.querySelector(".submenu");

        if (!link || !submenu) return;

        // Add a span around the link text if it doesn't exist
        if (!link.querySelector(".link-text")) {
          const text = link.textContent;
          link.innerHTML = `<span class="link-text">${text}</span>`;
        }
        link.addEventListener("click", function (e) {
          if (e.target.closest(".link-text")) {
            if (link.getAttribute("href") === "#") {
              e.preventDefault();
              parent.classList.toggle("open");
              submenu.classList.toggle("open");
            }
          } else {
            e.preventDefault();
            parent.classList.toggle("open");
            submenu.classList.toggle("open");
          }
        });
      });

      // Close sidebars when clicking outside
      document.addEventListener("click", function (e) {
        if (
          mainSidebar &&
          !mainSidebar.contains(e.target) &&
          e.target !== hamburgerContainer &&
          (!hamburgerContainer || !hamburgerContainer.contains(e.target))
        ) {
          mainSidebar.classList.remove("open");
        }
        if (
          settingsSidebar &&
          !settingsSidebar.contains(e.target) &&
          e.target !== settingsContainer &&
          (!settingsContainer || !settingsContainer.contains(e.target))
        ) {
          settingsSidebar.classList.remove("open");
        }
      });

      // when active nav-link is inside the submenu, the submenu is open by default
      navLinks.forEach((link) => {
        if (link.classList.contains("active")) {
          const parentNavItem = link.closest(".nav-item");
          if (
            parentNavItem &&
            parentNavItem.classList.contains("has-submenu")
          ) {
            const submenu = parentNavItem.querySelector(".submenu");
            if (submenu) {
              submenu.classList.add("open");
            }
          } else {
            const parentSubmenu = link.closest(".submenu");
            if (parentSubmenu) {
              const grandParentNavItem = parentSubmenu.closest(".nav-item");
              if (
                grandParentNavItem &&
                grandParentNavItem.classList.contains("has-submenu")
              ) {
                parentSubmenu.classList.add("open");
                grandParentNavItem.classList.add("open");
              }
            }
          }
        }
      });

      // Hide all links button
      const hideAllLinksButton = document.getElementById("toggle-submenus");
      if (hideAllLinksButton) {
        hideAllLinksButton.addEventListener("click", function (e) {
          e.stopPropagation();
          const openSubmenus = document.querySelectorAll(".submenu.open");
          if (openSubmenus.length <= 1) {
            document.querySelectorAll(".submenu").forEach((submenu) => {
              submenu.classList.add("open");
            });
            hideAllLinksButton.textContent = "Hide All Subpages";
          } else {
            openSubmenus.forEach((submenu) => {
              submenu.classList.remove("open");
            });
            document.querySelectorAll(".nav-item.open").forEach((item) => {
              item.classList.remove("open");
            });
            hideAllLinksButton.textContent = "Show All Subpages";
          }
        });
      }
    });
});
