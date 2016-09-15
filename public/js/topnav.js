var React = require('react');
var router = require('react-router');
var Link = router.Link;
var TopNav = function(props) {
  return (
    <nav>
				<ul className="clearfix">
					<li><Link className="what" onClick={props.newGameHandler}>What ?</Link></li>
					<li><Link className="new" onClick={props.whatPopUpHandler}>+ New Game</Link></li>
				</ul>
		</nav>
  );
};
module.exports = TopNav;
