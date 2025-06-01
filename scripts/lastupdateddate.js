// Function to extract date without time using setHours() with padding
function getDateWithoutTime(date) {
  // Create a new date object to avoid modifying the original date
  const dateWithoutTime = new Date(date);

  // Set hours, minutes, seconds, and milliseconds to zero
  dateWithoutTime.setHours(0, 0, 0, 0);

  // Format date components with padding
  const year = dateWithoutTime.getFullYear();
  const month = String(dateWithoutTime.getMonth() + 1).padStart(2, "0");
  const day = String(dateWithoutTime.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const lastUpdate = getDateWithoutTime(document.lastModified);
  const lastUpdatedElement = document.querySelector(".last-updated");
  lastUpdatedElement.textContent = "Last updated: " + lastUpdate;
});
