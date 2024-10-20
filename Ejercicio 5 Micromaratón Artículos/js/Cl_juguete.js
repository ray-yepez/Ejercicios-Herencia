import Cl_articulo from "./Cl_articulo.js";

export default class Cl_juguete extends Cl_articulo {
    constructor(nom,ctd,pcoB,ed){
        super(nom,ctd,pcoB);
        this.edad = ed;
    }
    descuento(){
        if (this.edad == 1) return this.precioBase * (10/100);
        else return 0;
    }

}