document.addEventListener("DOMContentLoaded", function () {
  const goToTopButton = document.getElementById("go-to-top-button");

  // Scroll to top function
  goToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const goToTopButton = document.getElementById("go-to-top-button");
  const mainSidebar = document.getElementById("main-sidebar");
  const settingsSidebar = document.getElementById("settings-sidebar");

  function hideGoToTopButton() {
    if (document.body.dataset.theme === "flat-layout") {
      goToTopButton.style.display = "flex";
    } else if (
      mainSidebar.classList.contains("open") ||
      settingsSidebar.classList.contains("open")
    ) {
      goToTopButton.style.display = "none";
    } else {
      goToTopButton.style.display = "flex";
    }
  }

  // Add event listeners to update the visibility of the button
  mainSidebar.addEventListener("transitionend", hideGoToTopButton);
  settingsSidebar.addEventListener("transitionend", hideGoToTopButton);
});
