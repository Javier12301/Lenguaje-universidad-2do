//Importamos de mongoose model y Schema
const {model, Schema} = require("mongoose");

const ProductSchema = new Schema({
    //Este será la propiedad name, será tipo string, será requerido y será unico.
    name: { type: String, required: true, unique: true},
    //Este será que tenga una imagen
    img: { type: String, required: true},
    //Será si el producto se encuentra en el carrito, como default será falso, debido que el producto 
    //primero se encuentra fuera del carrito.
    inCart: { type: Boolean, default: false},
    //Será el precio del producto
    price: {type: Number, required: true},
})

module.exports = model("Product", CartSchema);