/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Link = React.createClass({

	render: function(){
		return (
			<a href={this.props.href}>{this.props.text}</a>
		);
	} 
});

module.exports = Link;