/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var	RouteHandler = Router.RouteHandler; 
var	Link = Router.Link;

var Navigation = React.createClass({
	/*contextTypes: {
		router: React.propTypes.func
	},*/

	render: function() {
		return (
			<nav>
	            <ul>
	              <li><Link to="home">Home</Link></li>
	              <li><Link to="about">About</Link></li>
	              <li><Link to="portfolio">Portfolio</Link></li>
	              <li><Link to="contact">Contact</Link></li>
	            </ul>
	            <RouteHandler />
			</nav>
		)
	}
});

module.exports = Navigation;