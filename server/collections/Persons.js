var Person    = require( '../models/Person' );
var Bookshelf = require( '../config/database' ).Instance;

var Persons = Bookshelf.Collection.extend( {
	'model' : Person
} );

module.exports = Persons;