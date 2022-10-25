//Importamos mongoose
const mongoose = require("mongoose");

//Este será la URL de nuestra base de datos
const MONGO_URL= "mongodb://localhost/test";

//Creamos una promesa, la cuál nos devolverá un resultado.
//El resultado que esperamos es que nos envie un mensaje diciendo que el servidor
//se encuentra funcionando y sino el catch nos enviará un mensaje de que se produjo un error.

const db = async() => {
    await mongoose
        .connect(MONGO_URL)
        .then(() => console.log("¡DataBase Funcionando con exito!"))
        .catch((error) => console.log(error))
};

//creamos el modulo para exportar la variable "db"
module.exports = db;