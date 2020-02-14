'use strict'

function startServer() {
    const express = require('express')
    const bodyparser = require('body-parser')
    const { PORT } = require('./config');
    const app = express();
    require('./routes')(app);
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(bodyparser.json())    
    app.listen(PORT, function () {
        console.log('inicio puerto:' + PORT);
    });
}
module.exports = {startServer}; 