const mwClose = document.querySelector("#mw-close");
const mwOpen = document.querySelector("#mw-open");
const modal = document.querySelector("#modal");

mwOpen.addEventListener("click", function () {
  modal.style.display = "block";
});

mwClose.addEventListener("click", function () {
  modal.style.display = "none";
});
