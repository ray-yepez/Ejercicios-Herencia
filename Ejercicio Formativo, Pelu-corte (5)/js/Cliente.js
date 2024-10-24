export default class Cliente{
    constructor(ced,ser) {
        this.cedula = ced;
        this.servicio = ser;
    }
    precio(){
        if (this.servicio == 1) return 35;
        else if (this.servicio == 2) return 50;
        else return 75;
        //Asumimos que vamos a ingresar los datos correctamente. 
    }
    descuento(){
        return 0;
        //Por principio de polimorfismo, esto va a cambiar en las clases hijas,
        //por ahora solo nos interesa que exista el método y cambie en las
        //clases que deriven de ella según el caso -- incluso pudiera ser que
        //en una no exista un descuento (p.ej: una clase pára pelo Rizado) y 
        //quedaría igual: descuento cero porque no aplica.
    }
    montoPagar(){
        return this.precio() - this.descuento();
    }
}