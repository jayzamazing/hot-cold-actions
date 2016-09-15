var React = require('react');
var ReactDOM = require('react-dom');

var Game = require('./game');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Game />, document.getElementById('app'));
});
