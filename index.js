//paquetes externos

const express = require("express")
const path = require("path");

//número de puerto

const PORT = process.env.PORT || 8080

//rutas

const tiendaRutas = require("./routes/tienda")
const carritoRutas = require("./routes/carrito")
const informacionRutas = require("./routes/informacion")

//creación de variable app con express

const app = express()

//JSON

app.use(express.json())

//ruta estática

app.use("/api/productosinicio", express.static("public")) 

//declarando las rutas correspondientes

app.use("/api", tiendaRutas);
app.use("/api", carritoRutas);
app.use("/api", informacionRutas);

//rutas principales

try {
  app.listen(PORT, ()=>{
    console.log("en funcionamiento.")
  })
} catch (error) {
  console.log("Se produjo el error:" + error);
}

app.get("/api/productosinicio", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
  })