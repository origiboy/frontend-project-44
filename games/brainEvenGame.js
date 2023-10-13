import { gameStart, gameRounds } from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

function brainEvenGameRounds() {
  const randomNumber = getRandomNumberBetween(0, 200);
  let result = '';
  if (randomNumber % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return { question: randomNumber, answer: result };
}

export default function brainEvenGame() {
  gameStart('Answer "yes" if the number is even, otherwise answer "no".');
  gameRounds(brainEvenGameRounds);
}
