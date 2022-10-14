// Dark mode

const btnDarkMode = document.querySelector("#darkMode");
const lightBulbSvg = btnDarkMode.querySelector("svg#lightBulbSvg");
const lightBulbOffSvg = btnDarkMode.querySelector("svg#lightBulbOffSvg");

btnDarkMode.addEventListener("click", () => {
  const body = document.querySelector("body");
  const isDarkModeActive = btnDarkMode.classList.contains("active");

  if(!isDarkModeActive) {
    body.classList.add("bg-dark");
    lightBulbOffSvg.classList.add("d-none");
    lightBulbSvg.classList.remove("d-none");
    btnDarkMode.classList.add("active");
  }

  else {
    body.classList.remove("bg-dark");
    lightBulbSvg.classList.add("d-none");
    lightBulbOffSvg.classList.remove("d-none");
    btnDarkMode.classList.remove("active");
  };
});