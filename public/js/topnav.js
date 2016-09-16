var React = require('react');
var TopNav = function(props) {
  return (
    <nav>
				<ul className="clearfix">
					<li><a className="what" onClick={props.whatPopUpHandler}>What ?</a></li>
					<li><a className="new" onClick={props.newGameHandler}>+ New Game</a></li>
				</ul>
		</nav>
  );
};
module.exports = TopNav;
