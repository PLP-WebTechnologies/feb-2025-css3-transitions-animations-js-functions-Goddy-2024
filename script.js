// DOM Elements
const actionBtn = document.getElementById("action-btn");
const animatedBox = document.getElementById("animated-box");
const savePrefsBtn = document.getElementById("save-prefs");
const bgColorPicker = document.getElementById("bg-color");

// Load saved preferences on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        bgColorPicker.value = savedColor;
    }
});

// Button click triggers animation
actionBtn.addEventListener("click", () => {
    animatedBox.classList.toggle("animate");
});

// Save user preference (background color)
savePrefsBtn.addEventListener("click", () => {
    const selectedColor = bgColorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem("bgColor", selectedColor);
    alert("Preferences saved! Refresh to see persistence.");
});
