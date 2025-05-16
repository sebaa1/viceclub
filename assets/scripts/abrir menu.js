document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menuContent = document.getElementById("menuContent");
  const container = document.querySelector(".container");
  const block = document.querySelector(".block");

  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    menuContent.classList.toggle("show");
    hamburger.classList.toggle("active");
    
    if (container) container.classList.toggle("menu-shift");
    if (block) block.classList.toggle("menu-shift");
  });

  document.addEventListener("click", function (event) {
    if (!menuContent.contains(event.target) && !hamburger.contains(event.target)) {
      menuContent.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});
