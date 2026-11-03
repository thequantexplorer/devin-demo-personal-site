(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getSavedTheme() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Storage can be unavailable (e.g. private mode); the toggle still works for this visit.
    }
  }

  function currentTheme() {
    return getSavedTheme() || (systemDark.matches ? "dark" : "light");
  }

  function updateButton(theme) {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    var next = theme === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
    button.querySelector(".theme-toggle-text").textContent =
      next === "dark" ? "Dark mode" : "Light mode";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    updateButton(theme);
  }

  // Runs in <head> so the right theme is set before the page paints.
  applyTheme(currentTheme());

  function onSystemChange() {
    if (!getSavedTheme()) applyTheme(currentTheme());
  }

  if (systemDark.addEventListener) {
    systemDark.addEventListener("change", onSystemChange);
  } else if (systemDark.addListener) {
    systemDark.addListener(onSystemChange);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    updateButton(root.getAttribute("data-theme"));

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      saveTheme(next);
      applyTheme(next);
    });

    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  });
})();
