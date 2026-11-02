(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");
  var STORAGE_KEY = "theme";

  function readSaved() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (e) {
      return null;
    }
  }

  var chosen = readSaved();

  function currentTheme() {
    return chosen || (media.matches ? "dark" : "light");
  }

  function render() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    button.textContent = next === "dark" ? "Dark" : "Light";
    button.setAttribute("aria-label", "Switch to " + next + " mode");
  }

  button.addEventListener("click", function () {
    chosen = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", chosen);
    try {
      localStorage.setItem(STORAGE_KEY, chosen);
    } catch (e) {}
    render();
  });

  function onSystemChange() {
    if (!chosen) render();
  }

  if (media.addEventListener) {
    media.addEventListener("change", onSystemChange);
  } else if (media.addListener) {
    media.addListener(onSystemChange);
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  render();
})();
