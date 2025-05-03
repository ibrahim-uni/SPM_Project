const profilePic = document.querySelector('.profile-pic');
const profileOverlay = document.getElementById('profileOverlay');
const closeBtn = document.getElementById('closeBtn');

profilePic.addEventListener('click', () => {
  profileOverlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  profileOverlay.style.display = 'none';
});

profileOverlay.addEventListener('click', (e) => {
  if (e.target === profileOverlay) {
    profileOverlay.style.display = 'none';
  }
});
