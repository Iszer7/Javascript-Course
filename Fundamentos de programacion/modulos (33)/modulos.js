import saludar, {Saludar, exportacion} from "./constantes.js";       //Si no pongo ./ no busca en esa carpeta, si necesito subir 1 nivel es ../ etc
import {aritmetica as calculos} from "./aritmetica.js";         //el "as" hace que puedas ponerle alias a la importacion y usar ese nombre

console.log(exportacion);
//Si no pongo export en el otro archivo aunque la variable exista no va a exportarla
//El va a exportar directamente una variable, hay que iniciarlizarla primero. Exceptuando las funciones o clases que si pueden exportarse directamente

console.log(calculos.sumar(3,4));
console.log(calculos.restar(4,5));
saludar();

let saludo = new Saludar();
saludo; //Esta es la clase