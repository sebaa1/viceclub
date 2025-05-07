const header = document.getElementById('header');
const logoContainer = document.getElementById('logo-container');
const dropdownContent = document.getElementById('dropdown-content');

function openMenu() {
  dropdownContent.classList.add('show');
}

function closeMenu() {
  dropdownContent.classList.remove('show');
}

logoContainer.addEventListener('mouseenter', openMenu);
header.addEventListener('mouseleave', closeMenu);
