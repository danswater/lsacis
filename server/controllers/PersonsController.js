var Promise = require( 'bluebird' );
var Persons = require( '../collections/Persons' );

module.exports = {
	'index' : function ( req, res, next ) {
		var persons = new Persons()
			.fetch()
			.then( function ( collection ) {
				var response = {
					'status' : 'success',
					'data' : collection
				};
				res.send( response );
			} );
	},

	'view' : function( req, res, next ) {
		var persons = new Persons()
			.query( { 'where' : req.params } )
			.fetchOne()
			.then( function ( model ) {
				var response  = {
					'status' : 'success',
					'data' : model
				};
				res.send( response );
			} );
	},

	'add' : function ( req, res, next ) {
		var persons = Persons.forge( [
			req.body
		] );

		Promise.all( persons.invoke( 'save' ) ).then( function () {
			var response = {
				'status' : 'success',
				'data' : req.body
			};
			res.send( response );
		} );
	},

	'edit' : function ( req, res, next ) {
		var persons = Persons.forge( [
			req.body
		] );

		Promise.all( persons.invoke( 'save' ) ).then( function () {
			var response = {
				'status' : 'success',
				'data' : req.body
			};
			res.send( response );
		} );
	},

	'delete' : function ( req, res, next ) {
		var persons = new Persons()
			.query( { 'where' : req.params } )
			.fetchOne()
			.then( function ( model ) {
				model.destroy();
				
				var response  = {
					'status' : 'success',
					'data' : null
				};
				res.send( response );
			} );
		}
};