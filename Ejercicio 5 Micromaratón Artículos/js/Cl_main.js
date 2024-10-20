import Cl_juguete from "./Cl_juguete.js";

//Aquí le llaman al archivo Cl_main.js, sin embargo por practicidad
//lo hice como si fuera simplemente un script como en el semestre 
//pasado

let carrito = new Cl_juguete("carrito",2,20,2);
let peluche = new Cl_juguete("peluche",3,20,1);

let salida = document.getElementById("salida");

salida.innerHTML = "Nombre del juguete: " + carrito.nombre + "<br>" +
"Cantidad: " + carrito.cantidad + "<br>" +
"Edad recomendada:" + carrito.edad + "<br>" +
"Precio base: $" + carrito.precioBase + "<br>" +
"Monto a pagar por el " + carrito.nombre + ": $" + carrito.aPagar() +
"<br>";

salida.innerHTML += "<br>Nombre del juguete: " + peluche.nombre + "<br>" +
"Cantidad: " + peluche.cantidad + "<br>" +
"Edad recomendada:" + peluche.edad + "<br>" +
"Precio base: $" + peluche.precioBase + "<br>" +
"Monto a pagar por el " + peluche.nombre + ": $" + peluche.aPagar() +
"<br>";



