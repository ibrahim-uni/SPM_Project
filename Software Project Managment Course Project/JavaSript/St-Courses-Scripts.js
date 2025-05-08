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


document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
      this.classList.toggle("rotated");
  });
});


//filter Season and Year

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  // Toggle dropdown on click
  select.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent it from closing immediately due to document click
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  // Set selected option
  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevents the document click from firing
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => option.classList.remove('activeMenu'));
      option.classList.add('activeMenu');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
    }
  });
});


