import { ListaPolinomio } from "./ListaPolinomio";

let pol1 = new ListaPolinomio("A");

//Insertando terminos 1 a 1
pol1.insertarTermino(2,100);
pol1.insertarTermino(4,5);
pol1.insertarTermino(-2,1);
pol1.insertarTermino(1,0);

console.log(`Polinomio : ${pol1.obtenerNombre()} `,pol1.mostrarPolinomio());

let pol2 = new ListaPolinomio("B");

//Insertando terminos 1 a 1
pol2.insertarTermino(2,100);
pol2.insertarTermino(4,5);
pol2.insertarTermino(2,4);
pol2.insertarTermino(1,3);

console.log(`Polinomio : ${pol2.obtenerNombre()} `,pol2.mostrarPolinomio());

//Multiplicar dos polinomios
let pol3 = pol1.multiplicar(pol2);

console.log(`Polinomio : ${pol3.obtenerNombre()} `,pol3.mostrarPolinomio());

//Sumar dos polinomios
let pol4 = pol1.sumar(pol2);

console.log(`Polinomio : ${pol4.obtenerNombre()} `,pol4.mostrarPolinomio());