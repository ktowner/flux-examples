/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var routes = require('./components/routes');
// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var App = require('./components/app.js');

/*React.render(
  <App />,
  document.getElementById('main')
);*/

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});