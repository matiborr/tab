'use strict'

//Libreria para  manejar http
const express = require('express')
//Libreria para parsear jsons
const bodyparser = require('body-parser')

const compraCtrl = require('./controllers/compra')
const productoCtrl = require('./controllers/producto')
//Inicializo el servidor
const app = express()

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

//solo dev

app.get('/api/getCompras/:idCommerce',compraCtrl.getCompras)

app.post('/api/saveCompra/', compraCtrl.saveCompra)

app.get('/api/getProducto/:idProducto/:idComercio', productoCtrl.getProducto)



//app.delete('/api/product/:productId',ProductCtrl.deleteProduct)


module.exports = app;