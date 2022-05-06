const socket = io();
console.log("hola")

socket.on("message_backend", (data)=>{
    console.log(data)
    render(data)
    socket.emit("message_cliente", "Buenas, Yo soy Robby!")
})

const render = (data)=>{
    let html = data.map((e)=>{
        return `
        <p> ${e.title} : ${e.price} <p>
        `
    }).join(" ")

    document.querySelector("#caja").innerHTML = html;
}