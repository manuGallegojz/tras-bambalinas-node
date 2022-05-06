const fs = require("fs");

class Carrito{
    constructor(archivo){
        this.archivo = archivo;
    }
    addProduct(Object){ //Recibe un objeto que agrega al carrito

    }
    deleteProduct(id){ //Recibe un número que filtra entre los productos del carrito para eliminar

    }
    deleteAll(){ //Limpia el carrito entero

    }
}

module.exports = Carrito;