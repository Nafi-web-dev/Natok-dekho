// darkmode.js
function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("darkModeBtn");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    btn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    btn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const btn = document.getElementById("darkModeBtn");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    if (btn) btn.textContent = "🌙 Dark Mode";
  } else {
    body.classList.remove("light-mode");
    if (btn) btn.textContent = "☀️ Light Mode";
  }
};