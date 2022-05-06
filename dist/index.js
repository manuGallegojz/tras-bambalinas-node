"use strict";

var _multer = _interopRequireDefault(require("multer"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//paquetes externos
var app = (0, _express["default"])(); //server

var http = require("http");

var server = http.createServer(app); //socket

var _require = require("socket.io"),
    Server = _require.Server;

var io = new Server(server); //Storage multer

var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function filename(req, file, cb) {
    cb(null, file);
  }
});

var upload = (0, _multer["default"])({
  storage: storage
}); //número de puerto

var PORT = process.env.PORT || 8080; //rutas

var tiendaRutas = require("../routes/tienda");

var carritoRutas = require("../routes/carrito");

var informacionRutas = require("../routes/informacion"); //conexion


io.on("connection", function (socket) {
  socket.emit("message_backend", "hola, yo robot.");
}); //seteo la plantilla

app.engine("hbs", _expressHandlebars["default"].engine({
  extname: "hbs",
  layoutsDir: __dirname + "/views/layouts",
  defaultLayout: "index",
  partialsDir: __dirname + "/views/partials"
}));
app.set('views', './views');
app.set('view engine', 'hbs'); //JSON

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  decode: false
})); //ruta estática

app.use("/api/inicio", _express["default"]["static"]("public")); //declarando las rutas correspondientes

app.use("/api/inicio", tiendaRutas);
app.use("/api/inicio", carritoRutas);
app.use("/api/inicio", informacionRutas); //rutas principales

try {
  app.listen(PORT, function () {
    console.log("en funcionamiento.");
  });
} catch (error) {
  console.log("Se produjo el error:" + error);
}

app.get("/api/inicio", function (req, res) {
  res.render("inicio");
});