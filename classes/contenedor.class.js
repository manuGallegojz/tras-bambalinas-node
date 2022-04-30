const fs = require("fs");

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }

    save(objeto) //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    {
        const data = fs.readFileSync(this.archivo, "utf-8")
        let productos = JSON.parse(data);
        objeto.id = productos.length+1;
        productos.push(objeto);
        fs.writeFileSync(this.archivo, JSON.stringify(productos), "utf-8")
        return productos;
        }

    getById(Number) //Recibe un id y devuelve el objeto con ese id, o null si no está.
    {
        const data = fs.readFileSync(this.archivo, "utf-8")
        let encontrarProducto = JSON.parse(data).find(x => {return x.id == Number})
        if(encontrarProducto == null){
            return { error : 'producto no encontrado' }
        }else{
            return encontrarProducto
        }
        }

    getAll() //Devuelve un array con los objetos presentes en el archivo.
    {
        const data = fs.readFileSync(this.archivo, "utf-8")
        const datos = JSON.parse(data);
        return datos
        }

    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {
        fs.readFile(this.archivo, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let ListaSinProducto = JSON.parse(data).filter(x => {
                    return x.id != Number
                })
                fs.writeFile(this.archivo, JSON.stringify(ListaSinProducto), "utf-8", (error) =>{
                    if(error){
                        console.log("Se produjo un error")
                        }
                })
            }
        }) 
        }
    }

//Creación de la instancia. Fijarse que la ruta hace referencia a la posición en la que se ubican los archivos utilizados.

module.exports = Contenedor;