/** @jsx React.DOM */
var React = require('react');
var Navigation = require('./navigation');

var Contact = React.createClass({
	render: function() {
		return (
			<div> 
				<Navigation />
				<h1>This is the Contact Page</h1>
				<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
			</div>
		)
	}
});

module.exports = Contact;