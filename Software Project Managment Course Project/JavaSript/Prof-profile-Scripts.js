// Example: set profile data if not already set
//if (!localStorage.getItem("profileData")) {
  const profileData = {
    name: "Kristin",
    id: "68547",
    fullName: "kristin kristin kristin",
    email: "kristin.kristin.kristin@gmail.com",
    studentsGraduated: 1056,
    yearsExperience: 5
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
  document.getElementById("profileStudents").textContent = data.studentsGraduated;
  document.getElementById("profileExperience").textContent = data.yearsExperience;

  document.getElementById("profileModal").style.display = "flex";
});

document.getElementById("profileModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
});

