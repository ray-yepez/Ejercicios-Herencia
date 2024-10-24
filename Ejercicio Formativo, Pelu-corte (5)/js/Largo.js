import Cliente from "./Cliente.js";

export default class Largo extends Cliente {
    constructor(ced,serv,per) {
        super(ced,serv);
        this.permanente = per.toUpperCase();
    }

    precioPmte(){
        if (this.permanente === "SI") return 300;
        else return 0;
    }

    descuento(){
        if (this.servicio == 3)
        return (this.precio() + this.precioPmte()) * (20/100);
        else
        return 0;
    }

    montoPagar(){
        return this.precio() + this.precioPmte() - this.descuento();
    }
}