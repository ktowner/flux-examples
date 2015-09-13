/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var routes = require('./components/routes');
var App = require('./components/app.js');


Router.run(routes, Router.HistoryLocation, function (Root) {
  React.render(<Root/>, document.getElementById('main'));
});