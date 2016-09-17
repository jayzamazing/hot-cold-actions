require('isomorphic-fetch');
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
var FEWEST_GUESSES = 'FEWEST_GUESSES';
var fewestGuesses = function(fewestGuestCount) {
  return {
    type: FEWEST_GUESSES,
    fewestGuestCount: fewestGuestCount
  }
};
var saveFewestGuesses = function() {
  return function(dispatch) {
    var url = 'localhost:8080/fewest-guesses';
    return fetch(url, {
      method: 'POST'
    }).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return reponse;
    }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return dispatch(
        fewestGuesses(data)
      );
    });
  }
};
var fetchFewestGuesses = function() {
  return function(dispatch) {
    var url = 'localhost:8080/fewest-guesses';
    return fetch(url)
    .then(function(response) {
      if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return reponse;
    }).then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return dispatch(
        fewestGuesses(data)
      );
    });
  }
};
exports.FEWEST_GUESSES = FEWEST_GUESSES;
exports.fewestGuesses = fewestGuesses;
exports.saveFewestGuesses = saveFewestGuesses;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.RANDOM_NUMBER = RANDOM_NUMBER;
exports.randomNumber = randomNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
