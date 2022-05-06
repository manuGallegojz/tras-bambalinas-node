const express = require("express")
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

//ROUTER

const {Router} = express;

let router = new Router()

// RUTAS

router.get("/servicios", (req, res)=>{
    res.render("servicios")
})

router.get("/contacto", (req, res)=>{
    res.render("contacto")
})

//exportando router

module.exports = router;