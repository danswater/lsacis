var _      = require( 'underscore' );
var Person = require( '../models/Person' );
var Bookshelf = require( 'bookshelf' );

module.exports = {
	'index' : function ( req, res, next ) {
		res.send( { 'message' : Bookshelf.Instance.toString() } );
	}
};