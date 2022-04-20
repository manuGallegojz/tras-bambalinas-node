const express = require("express")

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

router.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

router.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

//exportando router

module.exports = router;