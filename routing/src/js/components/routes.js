/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Link = Router = Router.Link;
var Home = require('./home');
var App = require('./app');
var About = require('./about');
var Portfolio = require('./portfolio');
var Contact = require('./contact');

var routes = (
	<Route path="/" handler={App}>
		<DefaultRoute name="home" handler={Home} />
		<Route name="about" handler={About} />
		<Route name="portfolio" handler={Portfolio} />
		<Route name="contact" handler={Contact} />
	</Route>
);

module.exports = routes;