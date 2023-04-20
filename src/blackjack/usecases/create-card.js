/**
 *
 * @param {Number} turn
 * @param {String} card
 * @param {Array} playersCardsContainer
 */
// Función para crear las cartas visualmente.
export const createCard = (turn, card, playersCardsContainer) => {

  if (!turn) throw new Error("El turno del jugador es obligatorio");
  if (!card) throw new Error("La carta es obligatoria");
  if (!playersCardsContainer) throw new Error("El contenedor HTML de las cartas es obligatorio");

  const cardImg = document.createElement("img");
  cardImg.src = `assets/cards/${card}.png`;
  cardImg.classList.add("card");
  playersCardsContainer[turn].append(cardImg);
};
