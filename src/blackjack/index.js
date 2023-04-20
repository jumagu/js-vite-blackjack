import {
  createDeck,
  createCard,
  requestCard,
  machineTurn,
  accumulatePoints,
} from "./usecases";

/* 
2C = Two of clovers
2D = Two of diamonds
2H = Two of Hearts
2S = Two of spades
*/

let deck = [];
const types = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];

let playersPoints = [];

// HTML
const reqCardBtn = document.querySelector("#req-card-btn");
const stopGameBtn = document.querySelector("#stop-game-btn");
const newGameBtn = document.querySelector("#new-game-btn");

const pointsHtml = document.querySelectorAll("small");

const playersCardsContainer = document.querySelectorAll(".divCards");

const initializeGame = (players = 2) => {
  deck = createDeck(types, specials);
  playersPoints = [];

  for (let i = 0; i < players; i++) {
    playersPoints.push(0);
  }

  pointsHtml.forEach((element) => (element.innerText = 0));
  playersCardsContainer.forEach((element) => (element.innerText = ""));

  reqCardBtn.disabled = false;
  stopGameBtn.disabled = false;
};

// Eventos
reqCardBtn.addEventListener("click", () => {
  const card = requestCard(deck);
  const playerPoints = accumulatePoints(0, card, playersPoints, pointsHtml);
  const cardHtml = createCard(0, card);
  playersCardsContainer[0].append(cardHtml);

  if (playerPoints > 21) {
    reqCardBtn.disabled = true;
    stopGameBtn.disabled = true;
    machineTurn(deck, playersPoints, playersCardsContainer, pointsHtml);
  } else if (playerPoints === 21) {
    reqCardBtn.disabled = true;
    stopGameBtn.disabled = true;
  }
});

stopGameBtn.addEventListener("click", () => {
  reqCardBtn.disabled = true;
  stopGameBtn.disabled = true;
  machineTurn(deck, playersPoints, playersCardsContainer, pointsHtml);
});

newGameBtn.addEventListener("click", () => {
  initializeGame();
});
