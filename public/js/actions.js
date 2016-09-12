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
var GENERATE_RANDOM_NUMBER = 'GENERATE_RANDOM_NUMBER';
var generateRandomNumber = function(randomNumber) {
  return {
    type: GENERATE_RANDOM_NUMBER,
    randomNumber: randomNumber
  };
};
var HOTORCOLD = 'HOTORCOLD';
var hotOrCold = function(randomNumber, guess) {
  return {
    type: HOTORCOLD,
    randomNumber: randomNumber,
    guess: guess
  };
};
var GUESSCOUNT = 'GUESSCOUNT';
var guestCount = function(count) {
  return {
    type: GUESSCOUNT,
    count: count
  };
};
