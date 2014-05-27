var Bookshelf = require( 'bookshelf' );
var settings = require( '../config/settings' );

module.exports = function () {
	'use strict';

	if( !Bookshelf.Instance ) {
		Bookshelf.Instance = Bookshelf.initialize( settings.database );
	}

};