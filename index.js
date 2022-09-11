var readlinSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var highScore = [
  { name: 'Anita', score: 5 },
  { name: 'Unnati', score: 4 },
  { name: 'Jyoti', score: 3 }
];

var largest = highScore[0];

var userName = readlinSync.question(chalk.keyword('magenta')('Give your name: '));
console.log(chalk.green('\nWelcome ' + chalk.blue(userName) + ' to play Quiz on React js'));
console.log('\n----------------------------------');

var question = [{
  que: '\n1) What is the correct command to create a new React project?',
  options: [
    { key: 'a', value: 'npx create-react-app appname' },
    { key: 'b', value: 'npm install create-react-app' },
    { key: 'c', value: 'npx install create-react-app -g' }, { key: 'd', value: 'install - l create-react-app' },],
  ans: 'a'
}, {
  que: '\n2) What is the default port number in which the application run ?',
  options: [
    { key: 'a', value: '3000' },
    { key: 'b', value: '8080' },
    { key: 'c', value: '5000' },
    { key: 'd', value: '3030' }],
  ans: 'a'
}, {
  que: '\n3) Which of the following is a way to handle data in React.js ?',
  options: [
    { key: 'a', value: 'State & Props' },
    { key: 'b', value: 'Services & Components' },
    { key: 'c', value: 'State & Services' },
    { key: 'd', value: 'State & Component' }],
  ans: 'a'
}, {
  que: '\n4) Which of the following is must for the API in React.js ?',
  options: [
    { key: 'a', value: 'SetinitialComponent' },
    { key: 'b', value: 'renderComponent' },
    { key: 'c', value: 'render' },
    { key: 'd', value: 'All of the above' }],
  ans: 'b'
}, {
  que: '\n5) In React.js, how we can pass the data from one component to another in React.js ?',
  options: [
    { key: 'a', value: 'SetState' },
    { key: 'b', value: 'Render with arguments' },
    { key: 'c', value: 'Props' },
    { key: 'b', value: 'PropTypes' }],
  ans: 'c'
}];

function play(obj) {
  console.log(chalk.rgb(255, 255, 0)(obj.que));
  for (var i = 0; i < obj.options.length; i++) {
    console.log(obj.options[i].key + '. ' + obj.options[i].value);
  }
  var userAns = readlinSync.question(chalk.rgb(0, 0, 255)('Enter your answer: '));
  if (userAns == obj.ans) {
    console.log(chalk.rgb(0, 255, 0)('You are right!'));
    score++;
  } else {
    console.log(chalk.rgb(255, 0, 0)('You are wrong!'));
  }
}

for (var i = 0; i < question.length; i++) {
  play(question[i]);
}
highScore.push({ name: userName, score: score });
console.log('\nYour final score is: ' + score);

for (var i = 0; i < highScore.length; i++) {
  if (largest.score <= highScore[i].score) {
    largest = highScore[i];
  }
}

console.log(chalk.rgb(255, 255, 0).bold('\n---------High Score--------'));
console.log('High Scorer name is: ' + largest.name);
console.log('High Score is: ' + largest.score);

