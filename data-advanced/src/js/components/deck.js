/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Card = require('./card');

var Deck = React.createClass({
	
	render: function (){
			console.log("Deck return called");
			return (
				<div className='deck'>
					{this.props.cards.map(function(obj){
						return <Card key={obj.id} title={obj.title} media={obj.media} copy={obj.copy} links={obj.links} cards={obj.cards} />		
						})
					}
				</div>
			)
	}
});

module.exports = Deck;