/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

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
          <h3 onClick={this.handleClick}>Click Here to Say Something</h3>
        </div>
      )
    },

    onChange: function() {
        console.log(getMessage());
    }
  });

module.exports = App;
