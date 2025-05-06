document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('studentPreview');
  const closeBtn = document.querySelector('.modal-close');
  const printBtn = document.getElementById('printBtn');
  const studentListButtons = document.querySelectorAll('.st-list-button');

  console.log(studentListButtons); // just to confirm

  studentListButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });
});
