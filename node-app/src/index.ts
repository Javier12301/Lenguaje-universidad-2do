//Importamos Express
import express from 'express';

//Inicializaciones
const app = express();

//Configuraciones
app.set('port', 3000);

//programas intermedios -> Middlewares

//Routes -> rutas

//Archivos estaticos

//Comenzar servidor
app.listen(app.get('port'), () => {
    console.log(`Puerto de servidor en ${app.get('port')}`);
})