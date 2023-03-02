const darkButton = document.querySelector(".switch");
const sunIcon = document.querySelector('img[src="assets/icon-sun.svg"]');
const moonIcon = document.querySelector('img[src="assets/icon-moon.svg"]');
const theme = document.querySelector(".theme");
// get the current mode from localStorage, or default to 'light'
let currentMode = localStorage.getItem("mode") || "light";

// set the initial mode
setMode(currentMode);

// add event listener to the button to toggle modes
darkButton.addEventListener("click", () => {
  currentMode = currentMode === "light" ? "dark" : "light";
  setMode(currentMode);
});

function setMode(mode) {
  // update localStorage with the new mode
  localStorage.setItem("mode", mode);

  // set the appropriate class on the body element
  document.body.classList.toggle("dark", mode === "dark");

  // update the button text and icons
  const buttonText = mode === "dark" ? "Light" : "Dark";
  const visibleIcon = mode === "dark" ? sunIcon : moonIcon;
  const hiddenIcon = mode === "dark" ? moonIcon : sunIcon;
  theme.textContent = buttonText;
  visibleIcon.classList.remove("hidden");
  hiddenIcon.classList.add("hidden");
}
