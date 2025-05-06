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
