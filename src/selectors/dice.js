export default function throwDice() {
  const firstDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const secondDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const thirdDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const fourthDiceResult = Math.floor(Math.random() * (7 - 1)) + 1;
  const threeThrows = firstDiceResult + secondDiceResult + thirdDiceResult;
  const dicesResultsList = [firstDiceResult, secondDiceResult, thirdDiceResult, fourthDiceResult];
  console.log(dicesResultsList);
  return threeThrows;
}
