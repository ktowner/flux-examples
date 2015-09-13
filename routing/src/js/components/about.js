/** @jsx React.DOM */
var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>This is the About Page</h1>
				<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
			</div>
		)
	}
});

module.exports = About;