const closeButton = document.querySelector("#mw-close");
const saveButton = document.querySelector("#pop-up__save");
const nameInput = document.querySelector("#pop-up__text-input");
const popUp = document.querySelector("#pop-up__window");


saveButton.addEventListener("click", function () {
  const nameValue = nameInput.value;

  if (nameValue.length > 1 && nameValue.length < 15) {
    popUp.style.display = "none";
    body.style.overflow = "visible";
  } else {
    alert("Некоректно введено ім'я. Спробуйте ще раз.");
  }

  return (nameInput.value = "");
});

closeButton.addEventListener("click", function () {
  popUp.style.display = "none";
  body.style.overflow = "visible";
});

popUp.addEventListener("click", function (event) {
  if (event.target === popUp) {
    popUp.style.display = "none";
    body.style.overflow = "visible";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    popUp.style.display = "none";
    body.style.overflow = "visible";
  }
});
