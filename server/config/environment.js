var express        = require( 'express' );
var path           = require( 'path' );
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var morgan         = require( 'morgan' );
var settings       = require( './settings' );
var models         = require( '../models' );

module.exports = function ( app ) {
	'use strict';

	console.log( 'settings up environment...' );
	app.use( express.static( path.join( settings.path, 'public' ) ) );
	app.use( morgan() );
	app.use( bodyParser() );
	app.use( methodOverride() );

	app.use( function ( req, res, next ) {
		models();
	} );

};
