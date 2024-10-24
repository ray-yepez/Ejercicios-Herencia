import Corto from "./Corto.js";
import Largo from "./Largo.js";
import Peluqueria from "./Peluqueria.js"

let dos = new Corto("22",2,"no");
let uno = new Corto("11",1,"si");
let cinco = new Corto("55",1,"no");
let ocho = new Corto("88",3,"si");

let cuatro = new Largo("44",2,"si");
let tres = new Largo("33",3,"no");
let siete = new Largo("77",1,"no");
let seis = new Largo("66",3,"si"); 

let tienda = new Peluqueria();

tienda.procesarClt(dos); tienda.procesarClt(uno); tienda.procesarClt(cinco)
tienda.procesarClt(ocho); tienda.procesarClt(tres); tienda.procesarClt(cuatro);
tienda.procesarClt(siete); tienda.procesarClt(seis);
 

let cortos = document.getElementById("corto");
let largos = document.getElementById("largo");

cortos.innerHTML =
 `
<tr>
    <td>${dos.cedula}</td>
    <td>$${dos.descuento().toFixed(2)}</td>
    <td>$${dos.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>$${uno.cedula}</td>
    <td>$${uno.descuento().toFixed(2)}</td>
    <td>$${uno.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>$${cinco.cedula}</td>
    <td>$${cinco.descuento().toFixed(2)}</td>
    <td>$${cinco.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>${ocho.cedula}</td>
    <td>$${ocho.descuento().toFixed(2)}</td>
    <td>$${ocho.montoPagar().toFixed(2)}</td>
</tr>
`;

largos.innerHTML = 
`
<tr>
    <td>${cuatro.cedula}</td>
    <td>$${cuatro.descuento().toFixed(2)}</td>
    <td>$${cuatro.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>${tres.cedula}</td>
    <td>$${tres.descuento().toFixed(2)}</td>
    <td>$${tres.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>${siete.cedula}</td>
    <td>$${siete.descuento().toFixed(2)}</td>
    <td>$${siete.montoPagar().toFixed(2)}</td>
</tr>
<tr>
    <td>${seis.cedula}</td>
    <td>$${seis.descuento().toFixed(2)}</td>
    <td>$${seis.montoPagar().toFixed(2)}</td>
</tr>
`;

document.getElementById("salida").innerHTML = "El mayor monto registrado es de $" + tienda.mayor.toFixed(2);

