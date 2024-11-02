export default class Cl_Cine {
    constructor() {
        //Se te olvidó colocarle this. para definirlos como atributos de clase
       this.contPer=0; //sugeriría que hicieras un getter para esto
       this.contTercera=0;
       this.acumMonto=0;
       this.acumTotal=0;
    }
    procesarPersona(persona){
        this.contPer++;
        this.acumMonto += persona.precioEntrada();
        if(persona.tipo==3){
            this.contTercera++;
        }
        if(persona.tipo==2){
            this.acumMonto+=persona.precioEntrada();
        }
    }
    porcentajeMayor(){
        return (this.contTercera/this.contPer)*100;
    }
    mostrarMontoEstudiante(){
        return this.acumMonto;
    }
    mostrarMontoTotal(){
        return this.acumTotal;
    }
    /* Algo así:
    get CantPersonas (){
        return this.contPer;
    }
    */
}