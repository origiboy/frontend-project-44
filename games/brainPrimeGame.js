import game from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  game(brainProgressionGameRounds, rules);
}
