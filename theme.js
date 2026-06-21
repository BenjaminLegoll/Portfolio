document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) {
    return;
  }

  const syncToggle = () => {
    toggle.setAttribute("aria-pressed", root.dataset.theme === "dark" ? "true" : "false");
  };

  toggle.addEventListener("click", () => {
    if (root.dataset.theme === "dark") {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    }

    syncToggle();
  });

  syncToggle();
});
