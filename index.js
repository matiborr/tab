
//Libreria para manejar mongodb
const mongoose = require('mongoose')


const port = process.env.PORT || 3000 

const app = require('./app')


mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err){
        console.log(`Error al conectar la base de datos ${err}`)
    } 
    console.log('Conexion a la base de datos establecida');
    //Ejecuto el servidor
    app.listen(port, () =>{
        console.log(`Api rest ejecutandose en el puerto ${port}`);
    })
})


