const inputField = document.getElementById("myInput");
const myDiv = document.getElementById("myDiv");

inputField.addEventListener("focus", function() {
  myDiv.style.display = "block";
});

inputField.addEventListener("blur", function() {
  myDiv.style.display = "none";
});
