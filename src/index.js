import readlineSync from 'readline-sync';

const roundCount = 3;

export default function game(generateRound, rules) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let allRightAnswers = true;
  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const getAnswerFromUser = readlineSync.question('Your answer: ');
    if (getAnswerFromUser === answer) {
      console.log('Correct!');
    } else {
      allRightAnswers = false;
      console.log(`${getAnswerFromUser} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (allRightAnswers) {
    console.log(`Congratulations, ${userName}!`);
  }
}
