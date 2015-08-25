// For debugging in the browser
if (process.env.NODE_ENV !== 'production' &&
    require('react/lib/ExecutionEnvironment').canUseDOM) {
  window.React = require('react');
}

var React = require('react');
var Env = require('react/lib/ExecutionEnvironment');

// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var App = React.createFactory(require('./components/app.js'));

Application = {
	start : function () {
			if(Env.canUseDOM){
				React.render(App(), document.getElementById('main'));
			}else{
				return React.renderToString(App());
			}
			
		}
}


module.exports = Application;
