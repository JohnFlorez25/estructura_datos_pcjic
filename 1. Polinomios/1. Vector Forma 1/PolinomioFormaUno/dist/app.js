"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PolinomioFormaUno_1 = require("./PolinomioFormaUno");
//1. Mostrando los elementos que están en el polinomio A de grado 8
let polinomioUno = new PolinomioFormaUno_1.PolinomioFormaUno('A', [4, 3, 2, 1, 3, 8]);
console.log("El grado del Polinomio es: " + polinomioUno.obtenerGrado());
console.log(polinomioUno.mostrar());
//2. Ajustando el grado real del polinomio B ya que existen ceros consecutivos desde la posición B[1]
let polinomioDos = new PolinomioFormaUno_1.PolinomioFormaUno('B', [5, 3, 2, 0, 3, 0, 4]);
polinomioDos.ajustar();
console.log("El grado del Polinomio es: " + polinomioDos.obtenerGrado());
console.log(polinomioDos.mostrar());
//3. Insertando valores en el polinomio B.
//Caso 1 = Cuando el exponente es mayor al exponente del polinomio inicial
polinomioDos.insertarTermino(5, 6);
console.log("El grado del Polinomio es: " + polinomioDos.obtenerGrado());
console.log(polinomioDos.mostrar());
//Caso 2 = Cuando el exponente es menor o igual al exponente del polinomio inicial
polinomioDos.insertarTermino(7, 5);
console.log(polinomioDos.mostrar());
//Caso 3 = Suma coeficientes cuando ya éxiste un coeficiente anterior con el mismo exponente
polinomioDos.insertarTermino(7, 5);
console.log(polinomioDos.mostrar());
//4. Suma de dos Polinomios
let sumaPolinomio = polinomioUno.sumar(polinomioDos);
console.log("La suma es: ", sumaPolinomio.mostrar());
//5. Multiplicar de dos Polinomios
let multiplicarPolinomio = polinomioUno.multiplicar(polinomioDos);
console.log("La multiplicación es: ", multiplicarPolinomio.mostrar());
//# sourceMappingURL=app.js.map