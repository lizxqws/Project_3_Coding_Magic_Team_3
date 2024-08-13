const mwClose = document.querySelector("#mw-close");
const mwOpen = document.querySelector("#mw-open");
const modal = document.querySelector("#modal");
const email = document.querySelector("#footer-email");
const body = document.querySelector("body");

function closeModal() {
  modal.style.display = "none";
  body.style.overflow = "visible";
}

mwOpen.addEventListener("click", function () {
  if (email.value.includes("@")) {
    modal.style.display = "block";
    body.style.overflow = "hidden";
  } else {
    alert("Некоректно введен email. Спробуйте ще раз.");
  }
  return (email.value = "");
});

mwClose.addEventListener("click", function () {
  closeModal();
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
