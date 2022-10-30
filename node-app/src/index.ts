//Importamos Express
import express from 'express';
import exphbs from 'express-handlebars';
//Utilizado para direccionar código a cierta rutas
import path from 'path';

//Inicializaciones
const app = express();

//Configuraciones
/*process.env.PORT es por si nosotros tenemos un puerto en la nube, pero si no existe utilizamos 
el default que configuramos*/
app.set('port', process.env.PORT || 3000);
//Handlebars esto es opcional, utilizado para generar un HTML
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    
}))

//programas intermedios -> Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Routes -> rutas

//Archivos estaticos

//Comenzar servidor
app.listen(app.get('port'), () => {
    console.log(`Puerto de servidorr en ${app.get('port')}`);

})