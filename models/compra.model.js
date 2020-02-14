'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compraSchema = Schema({
    idUser: { type: Number, required: true },
    idCommerce: { type: String, required: true },
    articles: { type: Array, required: true },
    date: { type: Date, required: true },
});

module.exports = mongoose.model('compras', compraSchema)