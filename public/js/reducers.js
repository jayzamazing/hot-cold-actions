var actions = require('./actions');

var initialState = {
  guesses: [],
  hotOrCold: '',
  randomNumber: null
};
function hotOrColdReducer(state, action) {
  var diff = Math.abs(state.randomNumber - action.guess);
      if (50 <= diff)
        return "Ice Cold";
      else if (30 <= diff && diff < 50)
        return "Cold";
      else if (20 <= diff && diff < 50)
        return 'Warm';
      else if	(10 <= diff && diff < 20)
        return 'Hot';
      else if (1 <= diff && diff < 10)
        return "Very Hot";
      else
          return "congratulations";
}
function gameReducer(state, action) {
  if (state === undefined) {
    return {randomNumber: null, guesses: [], hotOrCold: null}
  }
  if (action.type === actions.GUESS_NUMBER) {
    if (state.guesses
      && state.guesses.indexOf(action.guess) > -1) {
      return state;
    }
    return Object.assign(
      {}, state, {guesses: state.guesses.concat(action.guess)}, {hotOrCold: hotOrColdReducer(state, action)}
    );
    return state;
  } else if (action.type === actions.RANDOM_NUMBER) {
    return Object.assign({}, state, {randomNumber: Math.floor((Math.random() * 100) + 1)});
  } else if (action.type === actions.NEW_GAME) {
    return Object.assign(
      {}, {guesses: []}, {hotOrCold: ''}, {randomNumber: null}
    );
  }
}
exports.gameReducer = gameReducer;
