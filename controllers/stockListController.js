const {
    SuccessResult,
    FailureResult,
    Logger,
    LOGGER_CONSTANTS
} = require('../common');
// const stockContext = require('../../db/stock/stockContext');


module.exports = function getStockListController(context) {
    const logger = Logger(LOGGER_CONSTANTS.CONTROLLER, context.transactionID);

    function getStockList() {
        logger.debug('getStockList calling');
        // return stockContext.getStockList()
        // 	.then(data => new SuccessResult(data))
        // 	.catch(e => new FailureResult(e));
        return Promise.resolve('Hello i came').then(data => new SuccessResult(data))
            .catch(e => new FailureResult(e));
    }
    return {
        getStockList
    };
};