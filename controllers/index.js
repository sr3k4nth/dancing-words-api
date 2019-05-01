// const tradeListController = require('./trade/tradeListController');
// const deleteAllTradeController = require('./trade/deleteAllTradeController');
// const createTradeController = require('./trade/createTradeController');
// const userTradeListController = require('./trade/userTradeListController');
// const userListController = require('./user/userListController');
const stockListController = require('./stockListController');
// const stockTradeListController = require('./stock/stockTradeListController');
// const stockTradePriceRangeController = require('./stock/stockTradePriceRangeController');

module.exports = {
	// trade: {
	// 	tradeListController,
	// 	deleteAllTradeController,
	// 	createTradeController,
	// 	userTradeListController
	// },
	// user: {
	// 	userListController
	// },
	stock: {
		stockListController
		// stockTradeListController,
		// stockTradePriceRangeController
	}
};