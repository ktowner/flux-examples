/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

function getMessage() {
  return AppStore.getMessage();
}

var App = React.createClass({
    handleClick:function(){
      AppActions.saySomething('Hello World');
    },

    componentDidMount: function() {
      AppStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
      AppStore.removeChangeListener(this.onChange);
    },

    render:function(){
      return (
        <div className="wrapper">
          <RouteHandler />
        </div>
      )
    },

    onChange: function() {
        console.log(getMessage());
    }
  });

module.exports = App;
