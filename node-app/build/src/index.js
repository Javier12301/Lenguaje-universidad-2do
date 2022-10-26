"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos Express
const express_1 = __importDefault(require("express"));
//Inicializaciones
const app = (0, express_1.default)();
//Configuraciones
app.set('port', 3000);
//programas intermedios -> Middlewares
//Routes -> rutas
//Archivos estaticos
//Comenzar servidor
app.listen(app.get('port'), () => {
    console.log(`Puerto de servidor en ${app.get('port')}`);
});
