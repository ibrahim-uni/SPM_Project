const students = [
  { id: '2345532', name: 'ahmed mohamed', letter: 'AA', final: 85, makeup: 90 },
  { id: '2345533', name: 'mohamed ali', letter: 'BB', final: 75, makeup: 80 },
  { id: '2345534', name: 'sara ahmed', letter: 'CB', final: 65, makeup: 70 },
  { id: '2345535', name: 'fady abdel', letter: 'DB', final: 55, makeup: 60 },
  { id: '2345536', name: 'lina osman', letter: 'BB', final: 78, makeup: 82 },
  { id: '2345537', name: 'khaled farouk', letter: 'AB', final: 88, makeup: 92 },
];

// Fill main table
const tableBody = document.getElementById("tableBody");

students.forEach((student) => {
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

// Fill modal table
function populateModalTable() {
  const modalTableBody = document.getElementById("modalTableBody");
  modalTableBody.innerHTML = ''; // Clear previous rows

  students.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td><button class="letter-btn">${student.letter}</button></td>
      <td class="percentage">${student.final}%</td>
      <td class="percentage">${student.makeup}%</td>
    `;

    modalTableBody.appendChild(row);
  });
}

// Open modal
document.querySelector(".st-list-button").addEventListener("click", () => {
  document.getElementById("studentListModal").style.display = "flex";
  populateModalTable();
});

// Close modal when clicking outside the modal-content
window.addEventListener("click", (e) => {
  const modal = document.getElementById("studentListModal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

