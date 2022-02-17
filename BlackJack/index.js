let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let player = {
  name: "Kartik",
  chips: 640,
};
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
  // returns a number between 1 -13
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  // render 1st and 2nd card
  cardsEl.textContent = "Cards: ";
  // iterrate over the cards array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of this game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let SecondCard = getRandomCard();
  cards = [firstCard, SecondCard];
  sum = firstCard + SecondCard;
  renderGame();
}

function newCard() {
  // Logic for not drawing card after you are out
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    // console.log(cards);
    renderGame();
  }
}
