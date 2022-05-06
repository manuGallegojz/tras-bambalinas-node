const express = require("express");
const handlebars = require("express-handlebars");
const app = express()

//Seteo la plantilla

app.engine(
    "hbs",
    handlebars.engine({
        extname: "hbs",
        layoutsDir: __dirname + "../views/layouts",
        defaultLayout: "index",
        partialsDir: __dirname + "../views/partials",
    })
)
app.set('views', './views');
app.set('view engine', 'hbs');

//Clase

const Contenedor = require("../classes/contenedor.class");

const nuevoArchivo = new Contenedor("./productos.json");

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

  //todos los productos

router.get("/getAll", (req, res)=>{
    res.render("paginaProductos", {data: nuevoArchivo.getAll(), eliminar: null});
}) 

  //guardar productos

router.get("/formulario", (req, res)=>{
    res.render("form", {guardado: false, data: nuevoArchivo.getAll(), eliminar: true})
})

router.post("/formulario", (req, res)=>{
    nuevoArchivo.save(req.body)
    res.render("form", {eliminar: true})
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