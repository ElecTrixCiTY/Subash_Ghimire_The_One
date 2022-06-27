'use strict';
let rN = Math.ceil(Math.random() * 20);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const message = document.querySelector('.message');
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔No Number Input');
  } else if (guess === rN) {
    document.querySelector('.number').innerHTML = rN;
    displayMessage('Congratulations🎉🍾');
    document.querySelector('body').style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').innerHTML = highscore;
      displayHighscore(highscore);
    }
  } else if (guess !== rN) {
    if (score > 1) {
      score--;
      document.querySelector('.score').innerHTML = score;
      displayMessage(guess > rN ? 'High Guess📈' : 'Low Guess📉');
      
    } else {
      displayMessage('You lost the Game😔! Game Over');

      document.querySelector('.score').innerHTML = 0;
    }
  }
  // else if (guess < rN) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').innerHTML = score;
  //     message.innerHTML = 'Low guess';
  //     document.querySelector('body').style.backgroundColor = '#222';
  //   } else {
  //     message.innerHTML = 'Game Over';
  //     document.querySelector('.score').innerHTML = 0;
  //     document.querySelector('body').style.backgroundColor = '#222';
  //   }
  // } else if (guess > rN) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').innerHTML = score;
  //     document.querySelector('body').style.backgroundColor = '#222';
  //     message.innerHTML = 'High guess';
  //   } else {
  //     message.innerHTML = 'Game Over';
  //     document.querySelector('.score').innerHTML = 0;
  //   }
});
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start Guessing...');

  document.querySelector('body').style.backgroundColor = '#222';

  rN = Math.ceil(Math.random() * 20);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
  console.log(highscore, score);
  score = 20;
  document.querySelector('.score').innerHTML = score;
});
