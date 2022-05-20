export default function throwDice() {
  const firstDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const secondDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const thirdDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const fourthDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  // const threeThrows = firstDiceResult + secondDiceResult + thirdDiceResult;
  const dicesResultsList = [firstDiceResult, secondDiceResult, thirdDiceResult, fourthDiceResult];
  const lowerDiceFromResults = Math.min(...dicesResultsList);

  const lowerDice = (dice) => dice === lowerDiceFromResults;
  const lowerDiceIndex = dicesResultsList.findIndex(lowerDice);
  dicesResultsList.splice(lowerDiceIndex, 1);
  const sumDices = dicesResultsList[0] + dicesResultsList[1] + dicesResultsList[2];
  return sumDices;
}
