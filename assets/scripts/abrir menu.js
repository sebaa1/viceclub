document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menuContent = document.getElementById("menuContent");
  const container = document.querySelector(".container"); // Seleccionamos el contenedor
  
  hamburger.addEventListener("click", function (event) {
    event.stopPropagation();
    menuContent.classList.toggle("show");
    container.classList.toggle("menu-shift"); // Desplazamos el contenedor
  });
  
  document.addEventListener("click", function (event) {
    if (!menuContent.contains(event.target) && !hamburger.contains(event.target)) {
      menuContent.classList.remove("show");
      container.classList.remove("menu-shift"); // Volvemos al estado original
    }
  });
});
