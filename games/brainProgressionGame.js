import game from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

const rules = 'What number is missing in the progression?';
const progressionLengthDefault = 10;

function generateProgression(firstNumber, dx, progressionLength) {
  const sequence = [];
  for (let i = 0; i < progressionLength; i += 1) {
    sequence.push(firstNumber + dx * i);
  }
  return sequence;
}

function brainProgressionGameRounds() {
  const randomFirstNumber = getRandomNumberBetween(1, 30);
  const randomDx = getRandomNumberBetween(2, 10);
  const randomIndex = getRandomNumberBetween(0, progressionLengthDefault - 1);

  const sequence = generateProgression(randomFirstNumber, randomDx, progressionLengthDefault);
  const result = sequence[randomIndex];
  sequence[randomIndex] = '..';

  return { question: `${sequence.join(' ')}`, answer: result.toString() };
}

export default function brainEvenGame() {
  game(brainProgressionGameRounds, rules);
}
