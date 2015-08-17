/** @jsx React.DOM */
var React = require('react');
var Navigation = require('./navigation');

var Portfolio = React.createClass({
	render: function() {
		return (
			<div>
				<Navigation />
				<h1>This is the Portfolio Page</h1>
				<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.</p>
			</div>
		)
	}
});

module.exports = Portfolio;