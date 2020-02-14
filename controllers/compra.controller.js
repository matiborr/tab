'use strict'

const { Compra } = require('../models');

const getCompras = async function (req, res) {
    const { idCommerce } = req.params;
    try {
        const compras = await Compra.find({ "idCommerce": idCommerce });
        return res.status(201).send({ compras });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Error en el servidor, por favor intente más tarde.' });
    }
}

const saveCompra = async function (req, res) {
    try {
        const { idUser, idCommerce, articles, date } = req.body;
        let compra = new Compra();
        compra.idUser = idUser;
        compra.idCommerce = idCommerce;
        compra.articles = articles;
        compra.date = date;

        const compraGuardada = await compra.save();
        if (compraGuardada) {
            return res.status(200).send({ message: 'Compra guardada.' });
        } else {
            return res.status(401).send({ message: 'Error al guardar la compra.' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Error en el servidor, por favor intente más tarde.' });
    }
}


module.exports = {
    getCompras,
    saveCompra
}