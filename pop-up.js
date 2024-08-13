const closeButton = document.querySelector("#popUp-close");
const saveButton = document.querySelector("#pop-up__save");
const nameInput = document.querySelector("#pop-up__text-input");
const popUp = document.querySelector("#pop-up__window");

function closePopUp() {
  popUp.style.display = "none";
  body.style.overflow = "visible";
}

saveButton.addEventListener("click", function () {
  const nameValue = nameInput.value;

  if (nameValue.length > 1 && nameValue.length < 15) {
    closePopUp();
  } else {
    alert("Некоректно введено ім'я. Спробуйте ще раз.");
  }

  return (nameInput.value = "");
});

closeButton.addEventListener("click", function () {
  closePopUp();
});

popUp.addEventListener("click", function (event) {
  if (event.target === popUp) {
    closePopUp();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopUp();
  }
});
