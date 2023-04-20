/**
 * 
 * @param {Array<Number>} playersPoints 
 */
export const getWinner = (playersPoints) => {
  const [playerPoints, machinePoints] = playersPoints;

  setTimeout(() => {
    if (machinePoints === playerPoints) {
      alert("Empate");
    } else if (playerPoints > 21) {
      alert("La Computadora Gana");
    } else if (machinePoints > 21) {
      alert("El Jugador Gana");
    } else {
      alert("El Jugador Gana");
    }
  }, 100);
};
