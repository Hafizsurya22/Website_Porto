const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", opened);
  menuButton.textContent = opened ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
