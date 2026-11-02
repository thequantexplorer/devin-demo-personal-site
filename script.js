(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function readStored() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function store(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  function current() {
    return root.getAttribute("data-theme") || (media.matches ? "dark" : "light");
  }

  function updateButton(button) {
    var isDark = current() === "dark";
    var next = isDark ? "light" : "dark";
    button.textContent = isDark ? "Light" : "Dark";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
    button.setAttribute("aria-pressed", String(isDark));
  }

  // Runs in <head> so the saved theme applies before the first paint.
  root.classList.add("js");
  var stored = readStored();
  if (stored) root.setAttribute("data-theme", stored);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
    if (!button) return;

    updateButton(button);

    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      updateButton(button);
    });

    media.addEventListener("change", function () {
      if (!readStored()) updateButton(button);
    });
  });
})();
