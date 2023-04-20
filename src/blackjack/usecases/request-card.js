/**
 * This functions allows to take a card
 * @param {Array<String>} deck is an string array
 * @returns {String} return the request card
 */
export const requestCard = (deck) => {
  if (!deck || deck.length === 0)
    throw new Error("there are no cards in the deck");

  if (deck.length === 0) {
    throw "No hay cartas en la baraja";
  }

  return deck.pop();
};
