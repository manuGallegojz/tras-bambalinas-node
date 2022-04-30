const express = require("express");

//Clase

const Contenedor = require("../classes/contenedor.class");

const nuevoArchivo = new Contenedor("./productos.json");

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

//todos los productos

router.get("/products", (req, res)=>{
    res.send(nuevoArchivo.getAll());
})

//producto según id

router.get("/products/:id", (req, res)=>{
    res.send(nuevoArchivo.getById(req.params.id));
})

//actualizar productos

router.put("/products/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id,
        nuevo: req.body
    })
})

//eliminar productos

router.delete("/products/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

//exportando router

module.exports = router;