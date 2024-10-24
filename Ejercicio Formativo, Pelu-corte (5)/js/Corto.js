import Cliente from "./Cliente.js";

export default class Corto extends Cliente {
    constructor(ced,ser,ext){
        super(ced,ser);
        this.extension = ext.toUpperCase();
    }
    precioExt(){
        if (this.extension === "SI") return 500;
        else return 0;
    }

    descuento(){
        if (this.servicio == 3)
        return (this.precio() + this.precioExt()) * (20/100);
        else 
        return 0;
    }

    montoPagar(){
        return this.precio() + this.precioExt() - this.descuento();
    }

}

