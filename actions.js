function toggleMenu() {
  const floatMenu = document.getElementById("float_menu");

  if (floatMenu.style.display === "block") {
    floatMenu.style.display = "none";
  } else {
    floatMenu.style.display = "block";
  }
}

const floatMenuButton = document.getElementById("floatmenuButton");
const floatMenuCloseButton = document.getElementById("float_menu_close");

floatMenuButton.addEventListener("click", toggleMenu);
floatMenuCloseButton.addEventListener("click", toggleMenu);
