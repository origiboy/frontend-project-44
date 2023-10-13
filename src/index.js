import readlineSync from 'readline-sync';
import sayHello from './cli.js';

let userName = '';
export function gameStart(rules) {
  userName = sayHello();
  console.log(rules);
}

export function gameRounds(generateRound) {
  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    let getAnswerFromUser = readlineSync.question('Your answer: ');
    if (typeof answer === 'number') {
      getAnswerFromUser = Number(getAnswerFromUser);
    }
    if (getAnswerFromUser === answer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${getAnswerFromUser} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
