var Bookshelf = require( 'bookshelf' );
var settings    = require( './settings' );

var Instance = null;

module.exports = function() {
	if( !Instance ) {
		Instance = Bookshelf.initialize( settings.database );
	}
	return Instance;
}