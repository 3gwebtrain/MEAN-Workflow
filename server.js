var
	express		= require('express'),
	path		= require('path'),
	app			= express(),
	port 		= process.env.PORT || 8080;


var
	base		= app.use( express.static( __dirname + '/public') );

app.get('/', function( req, res ) {

	res.sendFile( path.join( __dirname + '/public/app/views/index.html') );

});

app.listen( port );
console.log( "port started at " + port );
