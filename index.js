//paquetes externos

const multer = require("multer");
const handlebars = require("express-handlebars");
const express = require("express");
const app = express();

//server

const http = require("http");
const server = http.createServer(app);

//socket

const {Server} = require("socket.io");
const io = new Server(server);

//Storage multer

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "uploads")
  },
  filename:(req, file, cb)=>{
    cb(null, file)
  }
})

let upload = multer({storage});

//número de puerto

const PORT = process.env.PORT || 8080;

//rutas

const tiendaRutas = require("./routes/tienda")
const carritoRutas = require("./routes/carrito")
const informacionRutas = require("./routes/informacion");

//tienda
const Contenedor = require("./classes/contenedor.class");  
const nuevoArchivo = new Contenedor("./productos.json");

//conexion

io.on("connection", (socket)=>{
  socket.emit("message_backend", nuevoArchivo.getAll())

  socket.on("message_cliente", (data)=>{
    console.log(data)
  })
})

//seteo la plantilla

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials",
  })
)
app.set('views', './views');
app.set('view engine', 'hbs');

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

app.get("/api/inicio", (req, res) => {
    res.render("inicio");
  })