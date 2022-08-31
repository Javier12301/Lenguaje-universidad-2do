function suma(a, b){
    return a + b;
}


//MODULO // FORMA DE CREAR UNO
const Persona = {
    nombre: "Javier",
    getNom: function(){
        return this.nombre;
    }
}


//Forma de exportar una función//
exports.suma = suma;

//MODULO//
module.exports = Persona;