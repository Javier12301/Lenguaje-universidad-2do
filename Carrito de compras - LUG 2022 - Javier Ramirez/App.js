//Importamos express y cors
const express = require('express');
const cors = require('cors');

//inicializamos express
const app = express();
 
app.use(cors());
app.use(express.json());

//Para poner en escucha el servidor con el puerto que deseamos.
app.listen(4000, () => {
    console.log("El server se encuentra funcionando en el puerto 4000");
})
