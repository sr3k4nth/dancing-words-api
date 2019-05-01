/**
 * @file Bootstraps the Trading web api application.
 */
/* eslint global-require:0 */
/** @desc load environment configuration into process */
async function configure() {
    const environmentizer = require('./common/environmentizer');

    environmentizer.config({
        path: process.argv[2]
    });

    // const db = require('./db');
    //* * @desc Retries connection to DB , if not it will fail to load the config in next step */

    // await db.connectDB(process.env.DB_IP, process.env.DB_PORT, process.env.DB_NAME);

    console.log('Configurations loaded!');
    return 'Configurations loaded!';
}

/**
 * @desc LoadModules loads all require modules for the Trading application
 * Modules:
 * EventEmitter: loosely coupled communcication arch between modules
 * Server.js: ExpressJS wrapper servers REST API
 * Net: Communication layer used to transfer data accross server physincal node servers
 * Scheduler: Helps to run jobs configures in background
 */
function loadModules() {
    // const eventEmittor = require('./common/eventEmitter');
  const api = require('./api/stock/stockApiHandler');
    const controllers = require('./controllers');
    const server = require('./core/server')(api, controllers);

    /**
     *This function starts up the server,
     *starts all required modules for routing
     */
    const run = () => {
        /** @desc application bootstrap */
        server.listen(8008, /* connectionListener */);
    };
    return {
        run
    };
}

async function bootstrap() {
    await configure();
    await loadModules().run();
}

bootstrap();