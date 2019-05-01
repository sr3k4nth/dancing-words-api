/*  eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["result"] }] */
const apiConstants = require('../../constants/apiConstants');
// const {
// 	Logger,
// 	LOGGER_CONSTANTS
// } = require('../../common/logger');
// const schema = require('../../schemas/stock');

// const logger = Logger(LOGGER_CONSTANTS.API);
const {
	HTTP_RESPONSES
	// ERROR_CODES
} = require('../../constants/apiConstants');
/**
 * get list of stocks record
 * @param {*} stockListHandler
 */
const stockListHandler = stockListController => function apiHandler(req, callback) {
    // logger.debug('get all stocks');
    console.log('handler is called');
	stockListController.getStockList().then((result) => {
		if (result.isSuccess()) {
			callback(apiConstants.CONSTANTS.EMPTY || '', result, {}, HTTP_RESPONSES.SUCCESS.code);
		} else {
			callback(result.error);
		}
	});
};


const obj =  {
    routes: [{
        method: 'get',
        apiHandler: stockListHandler,
        description: 'Get the list of stock',
        path: '/stocks',
        controller: 'controllers.stock.stockListController',
        inputs: {}
    }]
};


const handlers = {
	routes: [
		...obj.routes
	]
};

module.exports = {
	'stock-management': handlers
};

	// }, {
	// 	method: 'get',
	// 	apiHandler: stockTradeListHandler,
	// 	description: 'Get the list of stock',
	// 	path: '/stocks/:symbol/trades',
	// 	controller: 'controllers.stock.stockTradeListController',
	// 	inputs: schema.STOCK_TRADE
	// }, {
	// 	method: 'get',
	// 	apiHandler: stockTradePriceRangeHandler,
	// 	description: 'Get the list of stock',
	// 	path: '/stocks/:symbol/price',
	// 	controller: 'controllers.stock.stockTradePriceRangeController',
	// 	inputs: schema.STOCK_TRADE_PRICE
	// }]
// };