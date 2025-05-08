



const requestBtn = document.getElementById('requestMakeupBtn'); // The main trigger button
const popupOverlay = document.getElementById('popupOverlay');   // Course details popup

const confirmBtn = document.getElementById('confirmRequestBtn'); // "Request Make-up" inside popup
const confirmBtnPopup = document.getElementById('confirmRequestBtn-popup'); // Another button

const confirmPopup = document.getElementById('confirmPopup');
const finalPopup = document.getElementById('finalPopup');

const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const closeFinalPopup = document.getElementById('closeFinalPopup');

let clickedButton = null; // To track which button triggered the confirm popup

// Show course info popup when clicking main request button
requestBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'flex';
});

// Function to open confirm popup and track button that was clicked
function openConfirmPopup(e) {
  clickedButton = e.target;

  // Show confirm popup
  popupOverlay.style.display = 'none';
  confirmPopup.style.display = 'flex';
}

// Attach to both buttons
confirmBtn.addEventListener('click', openConfirmPopup);
confirmBtnPopup.addEventListener('click', openConfirmPopup);

// Confirm "Yes" to show final message and disable both buttons
confirmYes.addEventListener('click', () => {
  // Disable both Request Make-up buttons
  confirmBtn.disabled = true;
  confirmBtnPopup.disabled = true;

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

// Optional: click outside any popup to close it
[popupOverlay, confirmPopup, finalPopup].forEach(popup => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
  });
});



//popup 1

// Get the button and the popup elements
const showPopupBtn = document.getElementById('showPopupBtn');
const popupOverlayf = document.getElementById('popupOverlay1');

// Add event listener to the button
showPopupBtn.addEventListener('click', function() {
  // Show the popup by changing its display property
  popupOverlayf.style.display = 'flex';  // Display it as a flex container (centered)
});

// Add a click event to close the popup when clicking outside the popup box
popupOverlayf.addEventListener('click', function(event) {
  if (event.target === popupOverlayf) {
    // Hide the popup if the overlay is clicked (outside the popup box)
    popupOverlayf.style.display = 'none';
  }
});


//popup 3

// Get the button and the popup elements
const showPopupBtn3 = document.getElementById('showPopupBtn3');
const popupOverlay3 = document.getElementById('popupOverlay3');

// Add event listener to the button
showPopupBtn3.addEventListener('click', function() {
  popupOverlay3.style.display = 'flex'; 
});

// Add a click event to close the popup when clicking outside the popup box
popupOverlay3.addEventListener('click', function(event) {
  if (event.target === popupOverlay3) {
    // Hide the popup if the overlay is clicked (outside the popup box)
    popupOverlay3.style.display = 'none';
  }
});

//popup 4

const showPopupBtn4 = document.getElementById('showPopupBtn4');
const popupOverlay4 = document.getElementById('popupOverlay4');

showPopupBtn4.addEventListener('click', function() {
  popupOverlay4.style.display = 'flex';  
});


popupOverlay4.addEventListener('click', function(event) {
  if (event.target === popupOverlay4) {
    popupOverlay4.style.display = 'none';
  }
});

//popup 5

const showPopupBtn5 = document.getElementById('showPopupBtn5');
const popupOverlay5 = document.getElementById('popupOverlay5');

showPopupBtn5.addEventListener('click', function() {
  popupOverlay5.style.display = 'flex';  
});


popupOverlay5.addEventListener('click', function(event) {
  if (event.target === popupOverlay5) {
    popupOverlay5.style.display = 'none';
  }
});

//popup 6

const showPopupBtn6 = document.getElementById('showPopupBtn6');
const popupOverlay6 = document.getElementById('popupOverlay6');

showPopupBtn6.addEventListener('click', function() {
  popupOverlay6.style.display = 'flex';  
});


popupOverlay6.addEventListener('click', function(event) {
  if (event.target === popupOverlay6) {
    popupOverlay6.style.display = 'none';
  }
});




