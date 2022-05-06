const express = require("express")

//tienda
const Contenedor = require("../classes/contenedor.class");  
const nuevoArchivo = new Contenedor("../productos.json");

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

router.get("/carrito", (req, res) => {
    res.render("carrito")
})

router.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

//exportando router

module.exports = router;