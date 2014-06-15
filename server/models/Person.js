var _         = require( 'underscore' );
var Bookshelf = require( '../config/database' )();

var Person = Bookshelf.Model.extend( {
	'tableName' : 'persons'
} );
console.log( Bookshelf.Instance );
module.exports = Person;