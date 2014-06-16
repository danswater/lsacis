var Bookshelf = require( 'bookshelf' );
var settings    = require( './settings' );

var Instance = null;

if( !Instance ) {
	Instance = Bookshelf.initialize( settings.database );
}

module.exports = {
	'Instance' : Instance
};