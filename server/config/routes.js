var personsController = require( '../controllers/PersonsController' );

module.exports = function ( app ) {
	'use strict';

	app.get( '/persons', personsController.index );
	app.get( '/persons/:id', personsController.view );

	app.post( '/persons', personsController.add );
	app.put( '/persons/:id', personsController.edit );

	app.delete( '/persons/:id', personsController.delete );
};