var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./game');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      //allows access to parts of store and dispatch
      <Provider store={store}>
          <Game />
      </Provider>,
      document.getElementById('app')
  );
});
