import Cl_Persona from "./Cl_Persona.js";

export default class Cl_Estudiante extends Cl_Persona{

    constructor(nombre, tipo, dia){
        super(nombre, tipo);
        this.dia = dia;
    }

    descuento(){
        if(this.dia == 3)
            return this.entrada * 0.4;
        else
            return 0;
    }
    precioEntrada(){
        return this.entrada - this.descuento();
    }

}