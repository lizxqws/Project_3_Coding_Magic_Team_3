const mwClose = document.querySelector("#mw-close");
const mwOpen = document.querySelector("#mw-open");
const modal = document.querySelector("#modal");

mwOpen.addEventListener("click", function () {
  modal.style.display = "block";
});

mwClose.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
