//Importamos express y cors
const express = require('express');
const cors = require('cors');

const db = require('./Database');

//inicializamos express
const app = express();
 
app.use(cors());
app.use(express.json());

//Para poner en escucha el servidor con el puerto que deseamos.
app.listen(4000, () => {
    console.log("El server se encuentra funcionando en el puerto 4000");
    //Con esta variable db() ponemos en funcionamiento la base de datos.
    db();
});

//Para exportar el modulo a otros archivos que necesitemos
module.exports = app;