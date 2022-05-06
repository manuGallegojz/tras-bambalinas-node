//paquetes externos

const express = require("express")
const multer = require("multer")

//creación de variable app con express

const app = express()

//Seteo la plantilla

app.set('views', './view');
app.set('view engine', 'pug');

//JSON

app.use(express.json())
app.use(express.urlencoded({decode:false}))

//ruta estática

app.use("/api/inicio", express.static("public")) 

//declarando las rutas correspondientes

app.use("/api/inicio", tiendaRutas);
app.use("/api/inicio", carritoRutas);
app.use("/api/inicio", informacionRutas);

//rutas principales

try {
  server.listen(PORT, ()=>{
    console.log("en funcionamiento.")
  })
} catch (error) {
  console.log("Se produjo el error:" + error);
}


app.get("/api/productosinicio", (req, res) => {
    res.render("index");
  })


//tienda
const Contenedor = require("./classes/contenedor.class");  
const nuevoArchivo = new Contenedor("./productos.json");

//todos los productos

app.get("/api/productosinicio/getAll", (req, res)=>{
  res.render("productsPage", {data: nuevoArchivo.getAll()});
}) 
  
//guardar productos

app.get("/api/productosinicio/formulario", (req, res)=>{
  res.render("formPage", {guardado: false, data: nuevoArchivo.getAll(), eliminar: nuevoArchivo.deleteById()})
})

app.post("/api/productosinicio/formulario", (req, res)=>{
  nuevoArchivo.save(req.body)
  res.render("formPage", {guardado: true, data: nuevoArchivo.getAll(), eliminar: nuevoArchivo.deleteById()})
})