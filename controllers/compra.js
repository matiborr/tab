'use strict'

const Compras = require('../models/compra')

function getCompras(req,res){
    //Si recibo un id de comercio muestro las compras
    if(req.params.idCommerce){
        Compras.find({"idCommerce":req.params.idCommerce}, (err, Compras)=>{
            res.status(200).send({Compras})
        })
    }else{
       return res.status(404).send({message: `Id de comercio no definido`})
    }
}

function saveCompra(req, res){
    
    let compra = new Compras()
    compra.idUser = req.body.idUser
    compra.idCommerce = req.body.idCommerce
    compra.articles = req.body.articles
    compra.date = req.body.date;

    compra.save((err, compraStored) =>{
        if(err) res.status(500).send({message: `Error al salvar la base de datos ${err}`})

        res.status(200).send({compra:compraStored})
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
    getCompras,
  //  deleteProduct,
     saveCompra
}