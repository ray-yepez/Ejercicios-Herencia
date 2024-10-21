export default class Cl_cuadrado{
    constructor(base){
    this.base=base;
    }
    area(){
    return this.base * 2; //Ekisde, es base ^2 (ó base * base)
    }
    perimetro(){
    return this.base * 4;
    }
}