import generateGame from '../src/index.js';
import getRandomNumberBetween from '../src/utils.js';

const rules = 'What is the result of the expression?';

function calculate(operator, numberFirst, numberSecond) {
  switch (operator) {
    case '*':
      return numberFirst * numberSecond;
    case '-':
      return numberFirst - numberSecond;
    case '+':
      return numberFirst + numberSecond;
    default:
      throw new Error('Неизвестный оператор');
  }
}

function generateRound() {
  const operators = ['*', '-', '+'];
  const randomOperatorIndex = getRandomNumberBetween(0, 2);
  const randomNumberFirst = getRandomNumberBetween(0, 50);
  const randomNumberSecond = getRandomNumberBetween(0, 50);
  const result = calculate(operators[randomOperatorIndex], randomNumberFirst, randomNumberSecond);
  return { question: `${randomNumberFirst} ${operators[randomOperatorIndex]} ${randomNumberSecond}`, answer: result.toString() };
}

export default function brainCalculateGame() {
  generateGame(generateRound, rules);
}
