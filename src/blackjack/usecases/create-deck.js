import { shuffle } from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} types Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<string>} specials Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const createDeck = (types, specials) => {
  if (!types || types.length === 0) throw new Error("types is required as a string array");
  if (!specials || specials.length === 0) throw new Error("specials is required as a string array");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (const type of types) {
      deck.push(i + type);
    }
  }

  for (const type of types) {
    for (const spc of specials) {
      deck.push(spc + type);
    }
  }

  return shuffle(deck);
};
