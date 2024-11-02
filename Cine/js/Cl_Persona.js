export default class Cl_Persona 
{
    constructor(nombre, tipo)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.entrada = 2; //Entrada es un atributo.
        //Sería un método si dependiera de algún factor o fórmula.
    }

    precioEntrada(){
        return this.entrada;
    }
    descuento(){
        return 0;
    }
}