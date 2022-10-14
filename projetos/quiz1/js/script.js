// Dark mode

const btnDarkMode = document.querySelector("#darkMode");

btnDarkMode.addEventListener("click", () => {
  const body = document.querySelector("body");
  const isDarkModeActive = btnDarkMode.classList.contains("active");

  if(!isDarkModeActive) {
    body.classList.add("bg-dark");
    btnDarkMode.src = "imgs/lightbulb.svg";
    btnDarkMode.classList.add("active");
  }

  else {
    body.classList.remove("bg-dark");
    btnDarkMode.src = "imgs/lightbulb-off.svg";
    btnDarkMode.classList.remove("active");
  };
});