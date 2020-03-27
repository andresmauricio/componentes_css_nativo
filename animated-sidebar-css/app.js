const buttonToggle = document.querySelector(".toggle-btn");

buttonToggle.addEventListener("click", function() {
  document.getElementById("sidebar").classList.toggle("active");
});
