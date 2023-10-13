import { gameStart, gameRounds } from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

function brainCalcGameRounds() {
  const operators = ['*', '-', '+'];
  const randomOperatorIndex = getRandomNumberBetween(0, 2);
  const randomNumberFirst = getRandomNumberBetween(0, 50);
  const randomNumberSecond = getRandomNumberBetween(0, 50);
  let result = 0;
  switch (randomOperatorIndex) {
    case 0:
      result = randomNumberFirst * randomNumberSecond;
      break;
    case 1:
      result = randomNumberFirst - randomNumberSecond;
      break;
    case 2:
      result = randomNumberFirst + randomNumberSecond;
      break;
    default:
      result = randomNumberFirst * randomNumberSecond;
      break;
  }
  return { question: `${randomNumberFirst} ${operators[randomOperatorIndex]} ${randomNumberSecond}`, answer: result };
}

export default function brainEvenGame() {
  gameStart('What is the result of the expression?');
  gameRounds(brainCalcGameRounds);
}
