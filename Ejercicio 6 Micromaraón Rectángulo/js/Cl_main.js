import Cl_rectangulo from "./Cl_rectangulo.js";

//Vamos a hacerlo con clases, aunque no sea la forma más óptima:
export default class Cl_main {
    constructor() {
        this.rect1 = new Cl_rectangulo(4,2);
        this.rect2 = new Cl_rectangulo(3,5);
        this.salida = document.getElementById("salida");
    }
    mostrarDatos(){
        this.salida.innerHTML =
        `<div>
        Altura: ${this.rect1.altura} <br>
        Área resultante: ${this.rect1.area()} <br>
        Perímetro: ${this.rect1.perimetro()}  <br>
        </div>
        <br>
        `;
        //Así se manejan cadenas con varias líneas, se hacen con ` `
        // (acento grave)
        this.salida.innerHTML += 
        `<div>
        Altura: ${this.rect2.altura} <br>
        Área resultante: ${this.rect2.area()} <br>
        Perímetro: ${this.rect2.perimetro()}  <br>
        </div>
        <br>
        `; //Este formato de ${} te permite insertar el resultado de una expresión
        //dentro de una cadena de caracteres (string). La cadena resultante
        //se le conoce como «plantilla»
    }
}




