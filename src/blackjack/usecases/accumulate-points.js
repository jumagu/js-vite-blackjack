import { getCardValue } from "./card-value";

/**
 * turn: [0] primer jugador - [last] último será la computadora
 * @param {Number} turn
 * @param {String} card
 * @param {Array<Number>} playersPoints
 * @param {Array<any>} pointsHtml
 * @returns {Number}
 */
export const accumulatePoints = (turn, card, playersPoints, pointsHtml) => {
  playersPoints[turn] = playersPoints[turn] + getCardValue(card);
  pointsHtml[turn].innerText = playersPoints[turn];

  return playersPoints[turn];
};
