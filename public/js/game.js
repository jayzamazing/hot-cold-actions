var React = require('react');
var TopNav = require('./topnav');
var InfoBox = require('./infobox');

var Game = React.createClass({

    handleSubmit: function(e) {
      e.preventDefault();
    },
    whatPopUp: function() {},
    closeWhat: function() {},
    newGame: function() {},
    guessNumber: function(event) {
      console.log(event.target);
    },
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
                        <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
                        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                    </form>
                    <p>Guess #<span id="count">{count}</span>!</p>
                    <ul id="guessList" className="guessBox clearfix">{guessList}</ul>
                </section>
            </section>
        );
    }
});
module.exports = Game;
