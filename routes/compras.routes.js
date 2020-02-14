
var express = require('express');
var router = express.Router();
const { Compra } = require('../controllers');
module.exports = function (app) {
    app.get('/compras/get/:idCommerce',Compra.getCompras);
    app.post('/compras/save/:idCommerce', Compra.saveCompra);
    return app;
} 

