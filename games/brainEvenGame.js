import game from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  if (number % 2 === 0) return true;
  return false;
}

function brainEvenGameRounds() {
  const randomNumber = getRandomNumberBetween(0, 200);
  return { question: randomNumber, answer: isEven(randomNumber) ? 'yes' : 'no' };
}

export default function brainEvenGame() {
  game(brainEvenGameRounds, rules);
}
