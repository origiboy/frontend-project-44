import { gameStart, gameRounds } from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function brainGcdGameRounds() {
  const randomNumberFirst = getRandomNumberBetween(0, 100);
  const randomNumberSecond = getRandomNumberBetween(0, 100);
  const gcdNumber = gcd(randomNumberFirst, randomNumberSecond);
  return { question: `${randomNumberFirst} ${randomNumberSecond}`, answer: gcdNumber };
}

export default function brainEvenGame() {
  gameStart('Find the greatest common divisor of given numbers.');
  gameRounds(brainGcdGameRounds);
}
