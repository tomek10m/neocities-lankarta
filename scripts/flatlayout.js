document.addEventListener("DOMContentLoaded", function () {
  const flatLayoutToggle = document.querySelector(
    '.nav-link[data-theme="flat-layout"]'
  );
  let isFlatLayout = localStorage.getItem("flatLayout") === "true";

  if (isFlatLayout) {
    document.body.classList.add("flat-layout");
    flatLayoutToggle.textContent = "Animated Layout";
  }

  flatLayoutToggle.addEventListener("click", function (e) {
    e.preventDefault();

    isFlatLayout = !isFlatLayout;
    document.body.classList.toggle("flat-layout", isFlatLayout);
    flatLayoutToggle.textContent = isFlatLayout
      ? "Animated Layout"
      : "Flat Layout";
    localStorage.setItem("flatLayout", isFlatLayout);
  });
});
