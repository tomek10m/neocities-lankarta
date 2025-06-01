const buttons = document.querySelectorAll(".toggle-layout");
const containers = document.querySelectorAll(".flags-container");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const container = containers[index];
        if (container.classList.contains("default")) {
            container.classList.remove("default");
            container.classList.add("detailed");
            button.textContent = "Hide flag opinions";
        } else {
            container.classList.remove("detailed");
            container.classList.add("default");
            button.textContent = "Show flag opinions";
        }
    });
});