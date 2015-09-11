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
    
    getInitialState: function(){
    	return {text: "Server Side Text"};
    },

    componentDidMount: function() {
    	this.setState({text: "Client Side Text"});
      AppStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function() {
      AppStore.removeChangeListener(this.onChange);
    },

    render:function(){
      return (
        <div className="wrapper">
          <h3 onClick={this.handleClick}>{this.state.text}</h3>
        </div>
      )
    },

    onChange: function() {
        console.log(getMessage());
    }
  });

module.exports = App;
