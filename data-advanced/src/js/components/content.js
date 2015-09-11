/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Title = require('./title');
var Media = require('./img');
var Copy = require('./copy');
var Link = require('./link');

var Content = React.createClass({
	
	render: function (){
		
		var media = this.props.content.media.map(function(img){
			return <Media key={img.id} src={img.url} />
		});

		var links = this.props.content.links.map(function(link){

			return <Link key={link.id} href={link.href} text={link.label} />
		});
		return (
			<div className='content'>
				<Title text={this.props.content.title} />
				<div className="media">
					{media}
				</div>
				<Copy markup={this.props.content.copy} />
				<div className="links">
					{links}
				</div>
			</div>
		)
	}
});

module.exports = Content;