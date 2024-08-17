const wrapper = document.querySelector(".football__wrapper");
const ball = document.querySelector(".football__ball");

const ballWidth = 50;
const ballHeight = 50;

const ballHalfOfWidth = ballWidth / 2;
const ballHalfOfHeight = ballHeight / 2;

wrapper.addEventListener("mousedown", e => {
  let ballTop = Number(e.clientY) - ballHalfOfHeight - wrapper.offsetTop;

  let ballLeft = Number(e.clientX) - ballHalfOfWidth - wrapper.offsetLeft;

  // верх
  if (ballTop < 0) {
    ballTop = 0;
  }
  // ліво
  if (ballLeft < 0) {
    ballLeft = 0;
  }
  // право
  if (ballLeft + ballWidth > wrapper.offsetWidth) {
    ballLeft = wrapper.offsetWidth - ballWidth;
  }
  // низ
  if (ballTop + ballHeight > wrapper.offsetHeight) {
    ballTop = wrapper.offsetHeight - ballHeight;
  }

  ball.style.top = ballTop + "px";
  ball.style.left = ballLeft + "px";
});
