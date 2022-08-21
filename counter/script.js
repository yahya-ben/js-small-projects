let count = 0;
let color = "";
const value = document.querySelector("span");
const btns = document.querySelectorAll(".btn");

btns.forEach(function opt(btn) {
  btn.addEventListener("click", () => {
    if (btn.value === "DECREASE") {
      count--;
    } else if (btn.value === "INCREASE") {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      color = "green";
    } else if (count < 0) {
      color = "red";
    } else {
      color = "#5800ff";
    }
    value.style.color = color;
    value.textContent = count;
  });
});
