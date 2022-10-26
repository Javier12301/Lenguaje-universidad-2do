//Importamos Express
import express from 'express';

//Inicializaciones
const app = express();

//Configuraciones
/*process.env.PORT es por si nosotros tenemos un puerto en la nube, pero si no existe utilizamos 
el default que configuramos*/
app.set('port', process.env.PORT || 3000);

//programas intermedios -> Middlewares

//Routes -> rutas

//Archivos estaticos

//Comenzar servidor
app.listen(app.get('port'), () => {
    console.log(`Puerto de servidor en ${app.get('port')}`);
})