var path = require( 'path' );

var settings = {
	'path' : path.normalize( path.join( __dirname, '..' ) ),
	'port' : process.env.NODE_PORT || 3000,
	'database' : {
		'client' : 'mysql',
		'connection' : {
			'host'     : '127.0.0.1',
			'user'     : 'root',
			'password' : '',
			'database' : 'lsacis',
			'charset'  : 'UTF8_GENERAL_CI'
		}
	}
};

module.exports = settings;

