const checkYearMessage = document.querySelector(".check-year__input-message");
const checkYearInput = document.querySelector(".check-year__input-text");
const checkYearButton = document.querySelector(".check-year__input-button");
const checkYearAddBtn = document.querySelector('#btn[data-action="add"]');

const checkYear = () => {
  if (!checkYearInput.value) {
    checkYearMessage.style.cssText = "color: #990000; ";
    checkYearMessage.innerHTML = "Неправельний формат! Введіть число!";
    return;
  }

  if (checkYearInput.value % 4) {
    checkYearMessage.style.cssText = "color: #990000; ";
    checkYearMessage.innerHTML = "Ви народилися не у високосний рік!";
  } else {
    checkYearMessage.style.cssText = "color: #039900; ";
    checkYearMessage.innerHTML = "Ви народилися у високосний рік!";
  }
};

checkYearAddBtn.addEventListener("click", () => {
  checkYearButton.addEventListener("click", checkYear);
});
