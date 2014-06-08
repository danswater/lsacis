var personsControllers = require( '../controllers/Persons' );

module.exports = function ( app ) {
	'use strict';

	app.get( '/persons', personsControllers.index );
};