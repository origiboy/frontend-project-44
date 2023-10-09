import readlineSync from 'readline-sync';
import getRandomNumberBetween from './utils.js';
import sayHello from './cli.js';

export default function brainEvenGame() {
  const userName = sayHello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const randomNumber = getRandomNumberBetween(0, 200);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    let isCorrect = false;
    if (answer === 'yes' && randomNumber % 2 === 0) {
      isCorrect = true;
    } else if (answer === 'no' && randomNumber % 2 === 1) {
      isCorrect = true;
    }

    if (isCorrect) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${answer === 'yes' ? 'no' : 'yes'}.`);
      console.log(`Let's try again, ${userName}!`);
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
