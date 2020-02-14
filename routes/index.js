const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');
const { Compras } = require('./index.routes');
module.exports = function (app) {
    app
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());
    Compras(app);
    
    app.use(ErrorMiddleware);
    app.use(NotFoundMiddleware);
    return app;
}