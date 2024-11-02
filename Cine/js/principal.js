/* El cine
 Se conoce que el precio general de la entrada al cine es de $2
 Si es una persona de la tercera edad, entonces se otorga un 50% de descuento
 Para los estudiantes se les otorga un 40% de descuento si es miércoles (1=lunes)
 Se conoce de cada persona que llega al cine: su nombre, el tipo de persona
 (1=General, 2=Estudiante, 3=Tercera edad), para los estudiantes se conoce el día
 Se requiere: dado los datos de una persona, calcular el precio de su entrada.
 Para el cine, a. determinar la cantidad de personas que asistieron, b. el porcentaje de
 personas de la tercera edad, c. el monto total pagado por estudiantes y d. el monto
 total recaudado
 Usar herencia
 Ej:
 nombre tipo dia descuento() precioEntrada()+
 Ana     2    2     $0.0          $2.0
 Carla   1    -     $0.0          $2.0
 Luis    3    -     $1.0          $1.0
 Leo     2    3     $0.8          $1.2
 R.a cantidadPersonasAsistieron()=4
 R.b porcentajePersonas3raEdad()=25%
 R.c montoTotalPagadoEstuds()=$3.2
 R.d montoTotalRecaudado()=$6.2
 */
import Cl_Cine from "./Cl_Cine.js";
import Cl_AdultoMayor from "./Cl_AdultoMayor.js";
import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Persona  from "./Cl_Persona.js";

let cine= new Cl_Cine();

let persona1= new Cl_Estudiante("Anna", 2, 2);
let persona2= new Cl_Persona("Carla",1);
let persona3= new Cl_AdultoMayor("Luis", 3);
let persona4= new Cl_Estudiante ("Leo", 2, 3);

cine.procesarPersona(persona1);
cine.procesarPersona(persona2);
cine.procesarPersona(persona3);
cine.procesarPersona(persona4);

let salida = document.getElementById("salida")
let mostrarPersona=(persona)=> {
  console.log(persona.tipo);
  console.log(persona.tipo == 1 ? persona.dia : "-");
  return `<tr>
<td>${persona.nombre}</td>
<td>${persona.tipo}</td>
<td>${persona.tipo == 1 ? persona.dia : "-"}</td>
<td>${persona.descuento().toFixed(2)}</td>
<td>${persona.precioEntrada().toFixed(2)}</td>
</tr>`; 
};
salida.innerHTML=`
<table>
  <th>Nombre</th>
  <th>Tipo</th>
  <th>Dia</th>
  <th>Descuento</th>
  <th>Precio Entrada</th>
${mostrarPersona(persona1)}
${mostrarPersona(persona2)}
${mostrarPersona(persona3)}
${mostrarPersona(persona4)}
</table>
<br>
<br>Cantidad de personas que asistieron: ${cine.contPer}
<br>Porcentaje de personas de la tercera edad: ${cine.porcentajeMayor()}%
<br>Monto total pagado por estudiante: ${cine.mostrarMontoEstudiante()}
<br>Monto total recaudado: ${cine.mostrarMontoTotal()}
`;
