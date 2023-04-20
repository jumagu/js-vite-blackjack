import { accumulatePoints } from "./accumulate-points";
import { createCard } from "./create-card";
import { getWinner } from "./get-winner";
import { requestCard } from "./request-card";

/**
 *
 * @param {Array<String>} deck
 * @param {Array<Number>} playersPoints
 * @param {Array<any>} playersCardsContainer
 * @param {Array<any>} pointsHtml
 */
// Turno de la computadora
export const machineTurn = (
  deck = [],
  playersPoints,
  playersCardsContainer,
  pointsHtml
) => {
  let [playerPoints, machinePoints] = playersPoints;

  do {
    const card = requestCard(deck);
    machinePoints = accumulatePoints(
      playersPoints.length - 1,
      card,
      playersPoints,
      pointsHtml
    );
    createCard(playersPoints.length - 1, card, playersCardsContainer);
  } while (machinePoints < playerPoints && playerPoints <= 21);
  getWinner(playersPoints);
};
