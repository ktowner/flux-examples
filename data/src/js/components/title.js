/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Title = React.createClass({

	render: function(){
		return (
			<div className="title">
				<h1>{this.props.text}</h1>
			</div>);
	} 
});

module.exports = Title;