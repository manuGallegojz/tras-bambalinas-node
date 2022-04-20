const express = require("express");

//Clase

const Contenedor = require("../classes/contenedor.class");

const nuevoArchivo = new Contenedor("./productos.json");

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

//todos los productos

router.get("/productos", (req, res)=>{
    res.send(nuevoArchivo.getAll());
})

//producto según id

router.get("/productos/:id", (req, res)=>{
    res.send(nuevoArchivo.getById(req.params.id));
})

//guradar productos

router.post("/productos", (req, res)=>{
    let productosNuevo = nuevoArchivo.save(req.body)
    res.send(productosNuevo)
})

//actualizar productos

router.put("/productos/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id,
        nuevo: req.body
    })
})

//eliminar productos

router.delete("/productos/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

//exportando router

module.exports = router;