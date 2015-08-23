/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Content = React.createFactory(require('./content'));

var Card = React.createClass({

	/*getDefaultProps: function(){
		return {
			title: "My Title",
			media: [
				{
					url: "http://lorempixel.com/250/250/City/Detroit"
				}
			],
			copy: "hustles harder",
			links: [
				{
					href: "#",
					label: "Go Now"
				}
			]	
		};
	},*/

	handleClick: function () {
		AppActions.cardClick();
	},

	componentWillMount: function(){

	},

	componentDidMount: function() {

	},

	componentWillUnmount: function(){

	},
	
	render: function (){
		return (
			<div className='wrapper' onClick={this.handleClick}>
				<Content content={this.props.content} />
			</div>
		)
	}
});

module.exports = Card;