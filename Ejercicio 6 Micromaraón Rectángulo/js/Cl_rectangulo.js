import Cl_cuadrado from "./Cl_cuadrado.js";

export default class Cl_rectangulo extends Cl_cuadrado {
    constructor(base,alt){
        super(base);
        this.altura = alt;
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return this.base * 2 + this.altura * 2;
    }
}