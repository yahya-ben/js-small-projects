let length = 20;
const arr = rand(length);
const container = document.querySelector(".container");
const btn = document.querySelector("button");
container.style.gridTemplateColumns = `repeat(${length}, 50px)`;

// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

for (let i = 0; i < length; i++) {
  let item = document.createElement("div");
  item.style.height = `${arr[i]}px`;
  item.classList.add("item");
  container.append(item);
}

function rand(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.trunc(Math.random() * 450 + 50));
  }
  return arr;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
