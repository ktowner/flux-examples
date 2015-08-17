/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Navigation = require('./navigation');


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
          <Navigation />
          <h1>This is the home page</h1>
          <p onClick={this.handleClick}>Click Here to Say Something</p>
        </div>
      )
    },

    onChange: function() {
        console.log(getMessage());
    }
  });

module.exports = App;
