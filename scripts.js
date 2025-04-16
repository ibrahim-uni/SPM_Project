let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let mainContent = document.querySelector('.main-content');


window.addEventListener('DOMContentLoaded', () => {
  sidebar.classList.add('active');
  mainContent.style.left = "250px";
  mainContent.style.width = "calc(100% - 250px)";
});

btn.onclick = function() {
  sidebar.classList.toggle('active');

  if (sidebar.classList.contains('active')) {
    mainContent.style.left = "250px";
    mainContent.style.width = "calc(100% - 250px)";
  } else {
    mainContent.style.left = "100px";
    mainContent.style.width = "calc(100% - 100px)";
  }
};

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('activeMenu');
      });
      option.classList.add('activeMenu');
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
      this.classList.toggle("rotated");
  });
});




