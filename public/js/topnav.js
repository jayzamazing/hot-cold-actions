var React = require('react');

var TopNav = function(props) {
  return (
    <nav>
				<ul className="clearfix">
					<li><Link className="what" onClick="props.newGameHandler.whatPopUp">What ?</Link></li>
					<li><Link className="new" onClick="props.whatPopUpHandler.newGame">+ New Game</Link></li>
				</ul>
		</nav>
  );
};
module.exports = TopNav;
