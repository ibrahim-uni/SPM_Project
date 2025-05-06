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





const students = [
  { id: '2345532', name: 'ahmed mohamed', letter: 'AA', final: 85, makeup: 90 },
  { id: '2345533', name: 'mohamed ali', letter: 'BB', final: 75, makeup: 80 },
  { id: '2345534', name: 'sara ahmed', letter: 'CB', final: 65, makeup: 70 },
  { id: '2345535', name: 'fady abdel', letter: 'DB', final: 55, makeup: 60 },
  { id: '2345536', name: 'lina osman', letter: 'BB', final: 78, makeup: 82 },
  { id: '2345537', name: 'khaled farouk', letter: 'AB', final: 88, makeup: 92 },
];

const tableBody = document.getElementById("tableBody");

students.forEach((student, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td><button class="letter-btn">${student.letter}</button></td>
    <td class="percentage">${student.final}%</td>
    <td class="percentage">${student.makeup}%</td>
  `;

  tableBody.appendChild(row);
});



