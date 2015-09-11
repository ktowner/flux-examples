/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Title = require('./title');
var Media = require('./img');
var Copy = require('./copy');
var Link = require('./link');

var Card = React.createClass({

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
		var children = this.props.cards.map(function(obj){
			return <Card key={obj.id} title={obj.title} media={obj.media} copy={obj.copy} links={obj.links} cards={obj.cards} />
		});
		var media = this.props.media.map(function(img){
			return <Media key={img.id} src={img.url} />
		});

		var links = this.props.links.map(function(link){

			return <Link key={link.id} href={link.href} text={link.label} />
		});
		return (
			<section onClick={this.handleClick}>
				<div className="content">
					<Title text={this.props.title} />
					<div className="media">{media}</div>
					<Copy markup={this.props.copy} /> 
					<div className="links">{links}</div>
				</div>
				<div className='deck'>
					{children}
				</div>
			</section>
		)
	}
});

module.exports = Card;