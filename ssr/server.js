var express = require('express')
var exphbs  = require('express-handlebars');
var app =  express();
var Application = require('./dist/js/main.js');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {

	var markup = Application.start();
	
  	res.render('app', {title: "Flux SSR", app: markup, start: "Application.start();"});
});

app.use(express.static('dist'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});