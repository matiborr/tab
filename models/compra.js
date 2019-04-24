'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CompraSchema = Schema({
    idUser: Number, 
    idCommerce: String,
    articles: Array,
    date: String,
})

module.exports = mongoose.model('compras',CompraSchema)