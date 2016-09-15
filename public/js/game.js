var React = require('react');
var connect = require('react-redux').connect;
var TopNav = require('./topnav');
var InfoBox = require('./infobox');

var Game = React.createClass({
    handleSubmit: function(e) {
      e.preventDefault();
      console.log(e.target[0].value);
    },
    whatPopUp: function() {},
    closeWhat: function() {},
    newGame: function() {},
    render: function() {
        return (
            <section>
              <header>
                <TopNav newGameHandler={this.newGame} whatPopUpHandler={this.whatPopUp} />
                <InfoBox closeHandler={this.closeWhat} />
              </header>
                <section className="game">
                    <h2 id="feedback">Make your Guess!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required/>
                        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                    </form>
                    <p>Guess #<span id="count">0</span>!</p>
                    <ul id="guessList" className="guessBox clearfix"></ul>
                </section>
            </section>
        );
    }
});
module.exports = Game;
