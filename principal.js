import Cl_administracion from "./Cl_administracion.js";
import Cl_aportador from "./Cl_aportador.js";

let ap1 = new Cl_aportador(12122344, 2, 1, 0);
let ap2 = new Cl_aportador(33144567, 2, 3, 2);
let ap3 = new Cl_aportador(31123456, 1, 2, 3);

let administracion = new Cl_administracion();

administracion.procesarAportador(ap1);
administracion.procesarAportador(ap2);
administracion.procesarAportador(ap3);

let salida= document.getElementById("salida");
salida.innerHTML=`
Monto total aportado por la persona con cedula: ${ap1.ced} es de: ${ap1.calcAp()}$<br>
Monto total aportado por la persona con cedula: ${ap2.ced} es de: ${ap2.calcAp()}$<br>
Monto total aportado por la persona con cedula: ${ap3.ced} es de: ${ap3.calcAp()}$<br>
<br>
Monto Total reunido en el dia: ${administracion.acumMontHoy}$<br>
Monto Total reunido: ${administracion.calcTot()}$ (Incluyendo dias anteriores)<br>
Porcentaje de billete de 20$: ${administracion.calcPorcB20().toFixed(2)}%
`