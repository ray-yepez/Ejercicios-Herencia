export default class Peluqueria{
    constructor(){
        this.mayor = 0;
    }
    procesarClt(Cliente){
        if (Cliente.montoPagar() > this.mayor) this.mayor = Cliente.montoPagar();
    }
}