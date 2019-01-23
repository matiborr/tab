'use strict'

const Product = require('../models/product')




/*function getProduct(req, res){
   
    let productId = req.params.productId

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!product) return res.status(404).send({message: `El producto no existe`})
        res.status(200).send({product})
    })
}*/

function getProducts(req,res){
    Product.find({}, (err, products)=>{
        if(!products) return res.status(404).send({message: `No hay productos`})
        res.status(200).send({products})
    })
}

function saveProduct(req, res){
    
    let product = new Product()
    product.idUser = req.body.idUser
    product.idCommerce = req.body.idCommerce
    product.articles = req.body.articles
    product.date = req.body.date;

    product.save((err, productStored) =>{
        if(err) res.status(500).send({message: `Error al salvar la base de datos ${err}`})

        res.status(200).send({product:productStored})
    })
}

//Proximamente para borrar despues de tal fecha compras.

/*function deleteProduct(req,res){
    let productId = req.params.productId;

    Product.findById(productId, (err, product)=>{
        if(err) res.status(500).send({message: `Error al borrar producto de  base de datos: ${err}`})

        product.remove(err => {
            if(err) res.status(500).send({message: `Error al borrar producto de  base de datos: ${err}`});
            
            res.status(200).send({message: `El producto ${productId} fue correctamente eliminado`});

        })
    })
}*/

module.exports = {
   // getProduct,
    getProducts,
  //  deleteProduct,
    saveProduct
}