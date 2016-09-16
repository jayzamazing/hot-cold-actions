/*
* should be able to guess a number, generate a random number, determine how
* close quest is to random number, should be able to keep track of guess count
*/
var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(guess) {
  return {
    type: GUESS_NUMBER,
    guess: guess
  };
};
var RANDOM_NUMBER = 'RANDOM_NUMBER';
var randomNumber = function() {
  return {
    type: RANDOM_NUMBER
  };
};
var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.RANDOM_NUMBER = RANDOM_NUMBER;
exports.randomNumber = randomNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
