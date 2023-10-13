import { gameStart, gameRounds } from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function brainProgressionGameRounds() {
  const randomFirstNumber = getRandomNumberBetween(2, 100);
  const result = isPrime(randomFirstNumber) ? 'yes' : 'no';
  return { question: `${randomFirstNumber}`, answer: result };
}

export default function brainEvenGame() {
  gameStart('Answer "yes" if given number is prime. Otherwise answer "no".');
  gameRounds(brainProgressionGameRounds);
}
