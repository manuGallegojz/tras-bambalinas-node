const express = require("express")

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

router.get("/servicios", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

router.get("/contacto", (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

//exportando router

module.exports = router;