let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  count = count + 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}
