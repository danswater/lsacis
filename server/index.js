var path        = require( 'path' );
var express     = require( 'express' );
var settings    = require( './config/settings' );
var environment = require( './config/environment' );
var routes      = require( './config/routes' );
var Bookshelf = require( 'bookshelf' );
var settings = require( './config/settings' );

module.exports.start = function ( done ) {
	'use strict';

	// start bookshelf
	Bookshelf.Instance = Bookshelf.initialize( settings.database );

	var app = express();
	
	environment( app );

	routes( app );
	app.listen( settings.port, function () {
		console.log( 'Listening on port ' + settings.port );

		if( done ) {
			return done( null, app, server );
		}
	} ).on( 'error', function ( err ) {
		if( err.code == 'EADDRINUSE' ) {
			console.log( 'Address in use. Is the server is already running' );
		}

		if( done ) {
			return done( err );
		}
	} );
};

if( path.basename( process.argv[ 1 ], '.js' ) == path.basename( __filename, '.js' ) ) {
	module.exports.start();
}