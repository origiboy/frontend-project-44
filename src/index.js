import readlineSync from 'readline-sync';

const roundCount = 3;

export default function generateGame(generateRound, rules) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const getAnswerFromUser = readlineSync.question('Your answer: ');
    if (getAnswerFromUser === answer) {
      console.log('Correct!');
    } else {
      console.log(`${getAnswerFromUser} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
