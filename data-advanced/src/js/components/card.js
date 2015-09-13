/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var ClickStore = require('../stores/ClickCountStore');
var Title = require('./title');
var Media = require('./img');
var Copy = require('./copy');
var Link = require('./link');

var Card = React.createClass({

	handleClick: function (e) {
		e.stopPropagation();
		AppActions.cardClick(this._id);
	},
	
	getInitialState: function () {
		return {clicks: 0};
	},

	componentWillMount: function(){

	},

	componentDidMount: function() {
		ClickStore.addChangeListener(this.onClickChange);
	},

	componentWillUnmount: function(){
		ClickStore.removeChangeListener(this.onClickChange);
	},
	
	render: function (){
		this._id = this.props.id;
		var children = this.props.cards.map(function(obj){
			return <Card key={obj.id} id={obj.id} title={obj.title} media={obj.media} copy={obj.copy} links={obj.links} cards={obj.cards} />
		});
		var media = this.props.media.map(function(img){
			return <Media key={img.id} src={img.url} />
		});

		var links = this.props.links.map(function(link){

			return <Link key={link.id} href={link.href} text={link.label} />
		});
		return (
			<section className="card" id={this.props.id} onClick={this.handleClick} refs={this._id}>
				<div className="clicks">Clicks: {this.state.clicks}</div>
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
	},
	
	onClickChange: function() {
		var clicks = ClickStore.getCardClickById(this._id);
		this.setState({clicks: clicks});
	}
});

module.exports = Card;