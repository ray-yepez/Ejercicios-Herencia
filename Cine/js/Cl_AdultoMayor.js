import Cl_Persona from "./Cl_Persona.js";

export default class Cl_AdultoMayor extends Cl_Persona{
    constructor(nombre, tipo){
        super(nombre, tipo)
    }
    descuento(){ //ya sabemos que es tipo 3
        return this.entrada * 0.5;
    }
    precioEntrada(){
        return this.entrada - this.descuento();
    }
}

