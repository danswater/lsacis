var _         = require( 'underscore' );
var Bookshelf = require( '../config/database' ).Instance;

var Person = Bookshelf.Model.extend( {
	'tableName' : 'persons'
} );

module.exports = Person;