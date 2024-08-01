const mwClose = document.querySelector("#mw-close");
const mwOpen = document.querySelector("#mw-open");
const modal = document.querySelector("#modal");
const email = document.querySelector("#footer-email");

mwOpen.addEventListener("click", function () {
  if (email.value.includes("@")) {
    modal.style.display = "block";
  } else {
    alert("Некоректно введен email. Спробуйте ще раз.");
  }
  return (email.value = "");
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
