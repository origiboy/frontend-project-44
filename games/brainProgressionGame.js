import { gameStart, gameRounds } from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

function brainProgressionGameRounds() {
  const randomFirstNumber = getRandomNumberBetween(1, 30);
  const randomDx = getRandomNumberBetween(2, 10);
  const randomIndex = getRandomNumberBetween(0, 9);
  const sequence = [];
  let result = 0;
  for (let i = 0; i < 10; i += 1) {
    if (i !== randomIndex) {
      sequence.push(randomFirstNumber + randomDx * i);
    } else {
      sequence.push('..');
      result = randomFirstNumber + randomDx * i;
    }
  }
  return { question: `${sequence.join(' ')}`, answer: result };
}

export default function brainEvenGame() {
  gameStart('What number is missing in the progression?');
  gameRounds(brainProgressionGameRounds);
}
