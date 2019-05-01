const stockApiHandler = require('./stockApiHandler');

module.exports = {
	routes: [
		...stockApiHandler.routes
	]
};
