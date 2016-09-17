var React = require('react');
var connect = require('react-redux').connect;
var TopNav = require('./topnav');
var InfoBox = require('./infobox');
var actions = require('./actions');

var Game = React.createClass({
    getInitialState: function() {
      return {
        isHidden: true
      };
    },
    //called after component renders for first time
    componentDidMount: function() {
      //generate randomNumber
      this.props.dispatch(actions.randomNumber());
      this.props.dispatch(actions.fetchFewestGuesses());
    },
    //handle submission of the form
    handleSubmit: function(e) {
      e.preventDefault();
      //get the value of the guess input field
      var guess = e.target[0].value;
      //ensure number is valid
      if (guess <= 100 && guess >= 1) {
        this.props.dispatch(actions.guessNumber(e.target[0].value));
      }
    },
    whatPopUp: function() {
      this.setState({
        isHidden: false
      });
    },
    closeWhat: function() {
      this.setState({
        isHidden: true
      });
    },
    //function that deals with clearing state
    newGame: function() {
      //clear store data
      this.props.dispatch(actions.newGame());
      //clear input field
      document.getElementById('userGuess').value = '';
    },
    render: function() {
        var size = this.props.guesses.length;
        var guesses = this.props.guesses.map(function(item, index) {
          if (size > 1 && size !== index + 1) {
            return item + ', ';
          } else {
            return item;
          }
        });
        return (
            <section>
              <header>
                <TopNav newGameHandler={this.newGame} whatPopUpHandler={this.whatPopUp} />
                <InfoBox closeHandler={this.closeWhat} displayWhat={this.state.isHidden}/>
                <h1>HOT or COLD</h1>
              </header>
                <section className="game">
                    <h2 id="feedback">{this.props.hotOrCold || 'Make your Guess!'}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
                        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                    </form>
                    <p>Guess #<span id="count">{this.props.guesses.length}</span>!</p>
                    <ul id="guessList" className="guessBox clearfix">{guesses}</ul>
                    <p>Fewests Guesses #<span id="count">{this.props.fewestGuestCount || 'N/A'}</span>!</p>
                </section>
            </section>
        );
    }
});
var mapStateToProps = function(state, props) {
  return {
    guesses: state.guesses,
    hotOrCold: state.hotOrCold,
    fewestGuestCount: state.fewestGuestCount
  };
};
var Container = connect(mapStateToProps)(Game);
module.exports = Container;
