/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Img = React.createClass({

	render: function(){
		return (
			<img src={this.props.src} alt="" />
		);
	} 
});

module.exports = Img;