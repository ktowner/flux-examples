/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Copy = React.createClass({

	render: function(){
		return (
			<div className="copy">{this.props.markup}</div>
		);
	} 
});

module.exports = Copy;