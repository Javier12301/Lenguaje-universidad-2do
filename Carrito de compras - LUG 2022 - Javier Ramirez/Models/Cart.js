//Importamos de mongoose model y Schema
const {model, Schema} = require("mongoose");

const CartSchema = new Schema({
    //Este será la propiedad name, será tipo string, será requerido y será unico.
    name: { type: String, required: true, unique: true},
    //Este será que tenga una imagen
    img: { type: String, required: true},
    //Será la cantidad de productos del carrito
    amount: { type: Number, required: true},
    //Será el precio del producto
    price: {type: Number, required: true},
})

module.exports = model("Cart", CartSchema);