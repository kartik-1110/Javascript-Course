let hands = ["rock", "paper", "scissor"];

function randomHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(randomHand());
