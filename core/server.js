const {
	Logger,
	LOGGER_CONSTANTS
} = require('../common');
const logger = Logger(LOGGER_CONSTANTS.SERVER);
const express = require('express');

const rootApp = express();
const http = require('http').Server(rootApp);
const bodyParser = require('body-parser');
const routeServiceProvider = require('./service/routeServiceProvider');

rootApp.use(bodyParser.json()); // to support JSON-encoded bodies
rootApp.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

// rootApp.use(swaggerConfig.url, swaggerConfig.swaggerUi.serve, swaggerConfig.swaggerUi.setup(swaggerConfig.swaggerDocument));


module.exports = (handlers, controllers) => (function expressServer() {
	routeServiceProvider(express.Router).registerRoutes(rootApp, handlers, controllers);
	this.listen = function listenMain(port, callback = () => {}) {
		http.listen(port, (err) => {
			logger.debug(err || 'app running in ', http.address());
			callback(rootApp, http); // for testcases
		});
	};
	return this;
}());