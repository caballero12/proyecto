function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleBurgerMenu() {
  var navList = document.querySelector('.nav-list');
  navList.style.display = (navList.style.display === 'block') ? 'none' : 'block';
}

document.querySelector('.burger-menu').addEventListener('click', toggleBurgerMenu);

