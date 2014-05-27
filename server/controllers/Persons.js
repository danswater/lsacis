var _      = require( 'underscore' );
var Person = require( '../models/Person' );

module.exports = {
	'index' : function ( req, res, next ) {
		var person = new Person();
		console.log( person );
	}
};