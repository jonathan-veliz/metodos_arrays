console.log("Ejercicios Basicos");

console.log("Ejercicio 1 \n metodo push y pop ");
/*
1)Ejercicio de push y pop:
a.Crea un array vacío llamado "frutas".
b.Utiliza el método push para agregar las siguientes frutas al array: "manzana", "banana" y "naranja".
c.Utiliza el método pop para eliminar la última fruta del array.
d.Imprime el array resultante.

*/
let frutas =[];//a
 frutas.push('manzana','banana','naranja');//b
 console.log(frutas);
 

 frutas.pop();//c
 console.log(frutas);//d

 console.log("Ejercicio 2 \n metodos join y split");
 /*
 2)Ejercicio de join y split:

a.Crea un array llamado "nombres" con los siguientes elementos: "Juan", "María", "Pedro".
b.Utiliza el método join para unir todos los nombres en una cadena separada por comas.
c.Guarda el resultado en una variable llamada "nombresCompletos".
d.Utiliza el método split para convertir la cadena "nombresCompletos" 
nuevamente en un array.
e.Imprime el array resultante

 */
let nombres=["Juan", "María", "Pedro"]
let nombresCompletos = nombres.join(",");
console.log(nombresCompletos); 
let n =nombresCompletos.split("");
console.log(n);
console.log(nombresCompletos.split(","));

console.log("Ejercico 3 \n metodos slice y splice ")
/*
3)Ejercicio de slice y splice:

a.Crea un array llamado "numeros" con los números del 1 al 5.
b.Utiliza el método slice para crear un nuevo array llamado "subArray" que contenga los elementos desde el índice 2 hasta el final.
c.Utiliza el método splice para eliminar los dos últimos elementos del array "numeros".
d.Imprime tanto el array "subArray" como el array "numeros" resultantes.

*/
let numeros =[1,2,3,4,5];
let subArray = numeros.slice(2);
numeros.splice(-2);
console.log(subArray);
console.log(numeros);


console.log("Ejercico 4 \n metodo map")
/*
   4). Ejercicio de map:

a.Crea un array llamado "numeros" con los números del 1 al 5.
b.Utiliza el método map para multiplicar cada número por 2.
c.Guarda el resultado en un nuevo array llamado "dobles".
d.Imprime el array "dobles".

*/
let numeros1 = [1, 2, 3, 4, 5];
console.log(numeros1)
let dobles =numeros1.map(function(nro){ return nro*2});
console.log(dobles);

console.log("Ejercicio 5 \n metodo filter")
/*
5). Ejercicio de filter:

a.Crea un array llamado "edades" con los siguientes elementos: 18, 25, 12, 30, 15.
b.Utiliza el método filter para obtener un nuevo array llamado "mayoresDeEdad" que contenga solo las edades mayores o iguales a 18.
c.Imprime el array "mayoresDeEdad".
*/
let edades =[18,25,12,30];
let mayoresDeEdad = edades.filter(function(edad){ return edad >= 18});
console.log(mayoresDeEdad);

console.log("Ejercicios Basicos parte 2")

console.log("Ejercicio 1 \n metodo length");
/* 
1)Ejercicio de length:
a.Crea un array llamado "colores" con los siguientes elementos: "rojo", "verde", "azul".
b.Imprime la longitud del array utilizando la propiedad length.

*/
let colores = ['rojo','verde','azul'];
console.log(colores);
console.log(colores.length);


console.log("Ejercicio 2 \n metodos indexOf y lastIdexOf 3")
/* 
2)Ejercicio de indexOf y lastIndexOf:
a.Crea un array llamado "numeros" con los siguientes elementos: 1, 3, 5, 3, 7, 3.
b.Utiliza el método indexOf para encontrar la primera aparición del número 3 en el array.
c.Utiliza el método lastIndexOf para encontrar la última aparición del número 3 en el array.
d.Imprime ambos resultados.
*/
let numeros2 =[1,3,5,3,7,3];
console.log(numeros2);
let pri = numeros2.indexOf(3);
let ult = numeros2.lastIndexOf(3);
console.log(pri);
console.log(ult);

console.log("Ejercicio 3 \n includes pera ")
/*
3)Ejercicio de includes:
a.Crea un array llamado "frutas" con los siguientes elementos: "manzana", "banana", "naranja".
b.Utiliza el método includes para verificar si el array contiene la fruta "pera".
c.Imprime el resultado.

*/
let frutas1 = ["manzana", "banana", "naranja"];
console.log(frutas1);
 let v = frutas1.includes("pera");
 console.log(v);
 console.log(frutas1.includes("pera"));


 console.log("Ejercicio 4 \n metodo reverse")
/*
4)Ejercicio de reverse:
a.Crea un array llamado "letras" con los siguientes elementos: "a", "b", "c", "d".
b.Utiliza el método reverse para invertir el orden de los elementos en el array.
c.Imprime el array resultante.

*/

let letras = ["a", "b", "c", "d"];
console.log(letras)
let r = letras.reverse();
console.log (r);

console.log("Ejercicio 5 \n metodo sort")
/*
5)Ejercicio de sort:
a.Crea un array llamado "numeros" con los siguientes elementos: 5, 2, 9, 1, 7.
b.Utiliza el método sort para ordenar los números de forma ascendente.
c.Imprime el array resultante.

*/
let numeros3 = [5, 2, 9, 1, 7];
console.log(numeros3);
let ordenar= numeros3.sort();
console.log(ordenar);

console.log("Ejercicio 6 \n metodo concat")
/*
Ejercicio de concat:
a.Crea dos arrays: "nombres1" con los elementos "Juan", "María" y "nombres2" con los elementos "Pedro", "Laura".
b.Utiliza el método concat para unir los dos arrays en uno nuevo llamado "nombresCompletos".
c.Imprime el array "nombresCompletos"
 */
let nombres1 = ["Juan","Maria"];
console.log(nombres1);
let nombres2 =["Pedro","Laura"];
console.log(nombres2);
let nombresCompletos1 = nombres1.concat(nombres2);
console.log(nombresCompletos1);


console.log("Ejercicio 7\n metodo every > 18")
/*
7)Ejercicio de every:
a.Crea un array llamado "edades" con los siguientes elementos: 22, 35, 28, 42.
b.Utiliza el método every para verificar si todas las edades son mayores de 18.
c.Imprime el resultado.
 */
let edades1 = [22,35,28,42]
console.log(edades1)
let veri = edades1.every(function(edad) {return edad > 18});
console.log(veri)


console.log("Ejercicio 8 \n metodo some")
/*8)Ejercicio de some:
a.Crea un array llamado "notas" con los siguientes elementos: 7, 5, 9, 3.
b.Utiliza el método some para verificar si alguna nota es mayor o igual a 8.
c.Imprime el resultado.
 */
let  notas = [7,5,9,3];
let verificar = notas.some(function(nota){ return nota >= 8});
console.log(verificar);

console.log("Ejercicio 9 \n metodo reduce")
/*9)Ejercicio de reduce:
a.Crea un array llamado "numeros" con los siguientes elementos: 1, 2, 3, 4, 5.
b.Utiliza el método reduce para obtener la suma de todos los números en el array.
c.Imprime el resultado.
 */
let numeros4 =[1,2,3,4,5];
console.log(numeros4)
let red = numeros4.reduce(function(acumulador,num){ return acumulador+num});
console.log(red)



console.log("Ejercicios aplicados en funciones")
console.log("Ejercicio 1")
/*1)Problema de suma de elementos:
a.Crea una función llamada sumarElementos que reciba un array de números como parámetro.
b.La función debe sumar todos los elementos del array y devolver el resultado.
c.Prueba la función con diferentes arrays y verifica que la suma sea correcta.

 */

function sumarElementos(numeros5){
   return numeros5.reduce((a,n) => a+n,0)
   }
   let numeros5=[5,4,8,15,23];
   let s =sumarElementos(numeros5);
console.log(s);

/*
****NO ME SUMA QUISE HACER COMO EL EJEMPLO QUE DIERON EN LA CLASE***
function sumarElementos(){
   let lista = [];
   let nro;
   do{
      nro = parseInt(prompt("ingrese un numero para sumar hasta que ponga 0"));
      if(nro!== 0){
         lista.push(nro);
      }
      
   }while(nro!==0)
    console.log(lista);
    return lista;
}

function sumaNro(lista){
   return lista.reduce(function(a,n){return a+n},0);

}
let numeroo =sumarElementos();
let suma =  sumaNro(numeroo);
console.log(suma);*/

console.log("Ejercicio 2");
/*2)Problema de promedio de calificaciones:
a.Crea una función llamada calcularPromedio que reciba un array de calificaciones (números) como parámetro.
b.La función debe calcular y devolver el promedio de las calificaciones.
c.Prueba la función con diferentes arrays de calificaciones y verifica que el promedio sea correcto.
 */
function calcularPromedio(nota){
 let suma = nota.reduce((a,c)=> a+c,0);
 return suma / nota.length;

}


let nota1 = [8, 9, 7, 10, 6];
console.log(calcularPromedio(nota1)); 

let nota2 = [6, 7, 6, 9];
console.log(calcularPromedio(nota2)); 
console.log("Ejercicio 3");
/*3)Problema de búsqueda de palabra:

a.Crea una función llamada buscarPalabra que reciba un array de palabras y una palabra como parámetros.
b.La función debe buscar la palabra en el array y devolver true si la encuentra, o false si no la encuentra.
c.Prueba la función con diferentes arrays y palabras para verificar su funcionamiento.
 */