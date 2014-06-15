var _         = require( 'underscore' );
var Person = require( '../models/Person' );
module.exports = {
	'index' : function ( req, res, next ) {
		var person = new Person()
			.fetch()
			.then( function( collection ) {
				res.send( { 'message' : collection.get( 'firstname' ) } );
			} );

	}
};