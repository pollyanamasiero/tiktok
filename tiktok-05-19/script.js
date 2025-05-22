const circle = document.querySelector(".bar");
const value = document.querySelector(".value");
const button = document.getElementById("start");

let progress = 0;
let interval;

button.addEventListener("click", () => {
  clearInterval(interval);
  progress = 0;

  interval = setInterval(() => {
    if (progress <= 100) {
      let offset = 440 - (440 * progress) / 100;
      circle.style.strokeDashoffset = offset;
      value.textContent = `${progress}%`;
      progress++;
    } else {
      clearInterval(interval);
    }
  }, 50);
});
