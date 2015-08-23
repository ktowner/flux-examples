/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Title = React.createFactory(require('./title'));
var Img = React.createFactory(require('./img'));
var Copy = React.createFactory(require('./copy'));
var Link = React.createFactory(require('./link'));

var Content = React.createClass({

	componentWillMount: function(){

	},

	componentDidMount: function() {

	},

	componentWillUnmount: function(){

	},
	
	render: function (){
		var media = this.props.content.media.map(function(img){
			return (<figure>
						<Img src={img.url} />
					</figure>
					);
		});

		var links = this.props.content.links.map(function(link){

			return <Link href={link.href} text={link.label} />
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