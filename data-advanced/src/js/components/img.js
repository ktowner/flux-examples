/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Media = React.createClass({

	render: function(){
		return (
			<figure>
				<img src={this.props.src} alt="" />
			</figure>
		);
	} 
});

module.exports = Media;