let num1 = 1;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");
function Add() {
  let results = num1 + num2;
  sumEl.textContent = "Result: " + results;
}
function Subtract() {
  let results = num1 - num2;
  sumEl.textContent = "Result: " + results;
}
function Divide() {
  let results = num1 / num2;
  sumEl.textContent = "Result: " + results;
}
function Multiply() {
  let results = num1 * num2;
  sumEl.textContent = "Result: " + results;
}
