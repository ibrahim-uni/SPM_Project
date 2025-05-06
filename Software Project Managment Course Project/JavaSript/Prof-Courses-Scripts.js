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



const displayButton = document.getElementById('dis');
const toggleIcon = document.getElementById('toggle-icon');
const coursesCon = document.getElementById('courses-container');
const coursesListed = document.querySelector('.courses-listed');

// Initial state: dropdown-bar is shown, coursesCon is visible
coursesCon.style.display = 'grid';
coursesListed.style.display = 'none';
toggleIcon.className = 'fi fi-br-dropdown-bar';
toggleIcon.style.color = '#056663';
displayButton.style.backgroundColor = '#FFEADF';

displayButton.addEventListener('click', () => {
  const isConVisible = coursesCon.style.display !== 'none';

  // Toggle visibility
  coursesCon.style.display = isConVisible ? 'none' : 'grid';
  coursesListed.style.display = isConVisible ? 'flex' : 'none';

  // Toggle icon, background, and icon color based on visibility
  if (isConVisible) {
    // Going to listed
    toggleIcon.className = 'fi fi-br-layout-fluid';
    toggleIcon.style.color = 'white';
    displayButton.style.backgroundColor = '#056663';
  } else {
    // Going to container/grid
    toggleIcon.className = 'fi fi-br-dropdown-bar';
    toggleIcon.style.color = '#056663';
    displayButton.style.backgroundColor = '#FFEADF';
  }
});



const requestBtn = document.getElementById('requestMakeupBtn'); // The main trigger button
const popupOverlay = document.getElementById('popupOverlay');   // Course details popup

const confirmBtn = document.getElementById('confirmRequestBtn'); // "Request Make-up" inside popup
const confirmPopup = document.getElementById('confirmPopup');
const finalPopup = document.getElementById('finalPopup');

const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const closeFinalPopup = document.getElementById('closeFinalPopup');

// Show course info popup
requestBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

// Click "Request Make-up" inside popup
confirmBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
  confirmPopup.style.display = 'flex';
});

// Confirm "Yes" to show final message
confirmYes.addEventListener('click', () => {
  confirmPopup.style.display = 'none';
  finalPopup.style.display = 'flex';

  setTimeout(() => {
    finalPopup.style.display = 'none';
  }, 2000);
});


// Cancel confirmation
confirmNo.addEventListener('click', () => {
  confirmPopup.style.display = 'none';
});

// Optional: click outside any popup to close
[popupOverlay, confirmPopup, finalPopup].forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });
});

















