'use strict'

const producto = require('../models/producto')
const Compras = require('../models/compra')

function getProducto(req, res) {
    var articulos = {};

    //Falta chequear por fecha y setear que las compras sean de una fecha limitada

    var userCheked = [];
     //Obtengo las compras relacionadas a ese articulo
    Compras.find({ "idCommerce": req.params.idComercio, "articles": req.params.idProducto }, (err, compraResult) => {
        //Obtengo las compras
        for (var i = 0; i < compraResult.length; i++) {
             //Obtengo las compras de ese usuario para saber que compro
             if (!userCheked.includes(compraResult[i].idUser)) {
                 userCheked.push(compraResult[i].idUser);
                 //EN ESTE PASO DEBO AGREGAR QUE LA FECHA SEA ENTRE LA FECHA DE compraResult[i].date
                  Compras.find({ "idCommerce": req.params.idComercio, "idUser": compraResult[i].idUser }, (err, compraResultUser) => {
                     //Recorro las compras de los usuarios
                    
                    for (var h = 0; h < compraResultUser.length; h++) {
                           //Recorro los articulos de los usuarios
                        for (var j = 0; j < compraResultUser[h].articles.length; j++) {
                            //Si el usuario compro un articulo igual al que preguntamos lo ignoro
                            if (compraResultUser[h].articles[j] != req.params.idProducto) {
 
                                //Si el articulo ya esta seteado le sumo 1 sino lo agrego al array
                                if (articulos[compraResultUser[h].articles[j]]) {
                                    articulos[compraResultUser[h].articles[j]] += 1;
                                } else {
                                    articulos[compraResultUser[h].articles[j]] = 1;
                                }
                            }
                        }
                    }
                });
            }


        }
    })
    //Como es una funcion async espero que termine de generar todo antes de enviar los datos a la vista
    setTimeout(function () {
        var sorteable = [];
        for(var codigo in articulos){
            sorteable.push([codigo, articulos[codigo]]);
        }
        sorteable.sort(function(a, b) {
            return b[1] - a[1];
        });
        var resultado = [];
        var total = Math.min(20,sorteable.length);
        for(var i=0; i < total; i++){
            resultado.push(sorteable[i][0]);
        }
         res.status(200).send({resultado })
    }, 1000)

}




module.exports = {
    getProducto,
}