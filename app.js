const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );

app.get('/cars', function( request, response ){
	response.render( 'cars' );
});

app.get('/cats', function( request, response ){
	response.render( 'cats' );
});

app.listen( 8080, function(){
console.log('This server is running in node');
});