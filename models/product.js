'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ProductSchema = Schema({
    idUser: Number, 
    idCommerce: String,
    articles: Array,
    date: Date,
})

module.exports = mongoose.model('compras',ProductSchema)