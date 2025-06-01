document.addEventListener("DOMContentLoaded", () => {
  const convertToRegionalIndicator = (text) => {
    return text
      .split("")
      .map((char) => {
        const code = char.toUpperCase().charCodeAt(0);
        // Check if character is between 'A' (65) and 'Z' (90)
        if (code >= 65 && code <= 90) {
          // Regional Indicator Symbol A starts at Unicode U+1F1E6
          return String.fromCodePoint(0x1f1e6 + (code - 65));
        }
        return char;
      })
      .join("");
  };
});
