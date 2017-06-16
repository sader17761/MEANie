var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var index = require( '../modules/routes/index' );
var peeps = require( '../modules/routes/peeps' );

app.use( '/', index );
app.use( '/peeps', peeps );
app.use(bodyParser.urlencoded({extended:true}));
//app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

// removed 'localhost'
app.listen( 8080, function( req, res ){
  console.log( 'listening on 8080' );
});
