'use strict'

//Libreria para  manejar http
const express = require('express')
//Libreria para parsear jsons
const bodyparser = require('body-parser')

const ProductCtrl = require('./controllers/product')
//Inicializo el servidor
const app = express()

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

app.get('/api/getCompras',ProductCtrl.getProducts)

app.post('/api/saveCompra/', ProductCtrl.saveProduct)

//app.get('/api/product/:productId', ProductCtrl.getProduct)

//app.delete('/api/product/:productId',ProductCtrl.deleteProduct)


module.exports = app;