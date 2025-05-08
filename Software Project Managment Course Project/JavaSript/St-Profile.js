// Example: set profile data if not already set
//if (!localStorage.getItem("profileData")) {
  const profileData = {
    name: "Baraa",
    id: "68547",
    fullName: "Baraa Qasem",
    email: "baraa@gmail.com",
    GPA:"3.46",
    AdvName:"Prof. Kristin",
    AdvEmail:"kristin.kristin@gmail.com"
   
  };
  localStorage.setItem("profileData", JSON.stringify(profileData));
//}

const data = JSON.parse(localStorage.getItem("profileData"));
document.querySelector(".user-name").textContent = data.name;
document.querySelector(".user-number").textContent = data.id;




document.querySelector(".profile-pic").addEventListener("click", function () {
  const data = JSON.parse(localStorage.getItem("profileData"));

  document.getElementById("profileName").textContent = data.name;
  document.getElementById("profileId").textContent = data.id;
  document.getElementById("profileFullName").textContent = data.fullName;
  document.getElementById("profileEmail").textContent = data.email;
  document.getElementById("profileGPA").textContent = data.GPA;
  document.getElementById("profileAdvName").textContent = data.AdvName;
  document.getElementById("profileAdvEmail").textContent = data.AdvEmail;
  document.getElementById("profileModal").style.display = "flex";
});

document.getElementById("profileModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});
