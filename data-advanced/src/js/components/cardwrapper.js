/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Card = require('./card');

var CardWrapper = React.createClass({
	render: function(){
		return <Card title={this.props.title} media={this.props.media} copy={this.props.copy} links={this.props.links} cards={this.props.cards} />
	}
});

module.exports = CardWrapper;