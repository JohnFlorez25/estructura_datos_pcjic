"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolinomioFormaUno = void 0;
class PolinomioFormaUno {
    //*********************************************************
    // CONSTRUCTOR DE LA CLASE QUE RECIBE UN
    // VECTOR DADO
    //*********************************************************
    constructor(nombre, A) {
        this.nombre = nombre;
        this.n = A.length;
        this.vec = A;
    }
    //********************************************************
    // MÉTODO QUE REGRESA EL DATO QUE ESTA EN LA POSICON P
    // DEL VECTOR VEC
    //********************************************************
    obtenerDato(p) {
        return this.vec[p];
    }
    //********************************************************
    // MÉTODO QUE REGRESA EL TAMAÑO DEL VECTOR
    //********************************************************
    obtenerN() {
        return this.n;
    }
    obtenerGrado() {
        return this.vec[0];
    }
    //********************************************************
    // MÉTODO QUE COLOCA EL DATO D EN LA POSICION P DEL VECTOR
    //********************************************************
    asignarDato(p, d) {
        this.vec[p] = d;
    }
    //*******************************************
    // ESTE MÉTODO DEVUELVE UN STRING CON EL
    // POLINOMIO
    //********************************************
    mostrar() {
        let respuesta = this.nombre + " = ";
        let i = 0;
        let exp = 0;
        for (i = 1; i < this.vec[0] + 2; i++) {
            exp = this.vec[0] + 1 - i;
            if (this.vec[i] != 0) {
                if (this.vec[i] > 0) {
                    if (i == 1) {
                        respuesta = respuesta + this.vec[i] + "X^" + exp;
                    }
                    else {
                        respuesta = respuesta + "  +  " + this.vec[i] + "X^" + exp;
                    }
                }
                else {
                    respuesta = respuesta + "  -  " + this.vec[i] * -1 + "X^" + exp;
                }
            }
        }
        return respuesta;
    }
    //*******************************************
    // ESTE MÉTODO EVITA QUE EXISTAN COEFICIENTE
    // 0 CONSECUTIVOS AJUSTANDO EL GRADO REAL
    // DEL POLINOMIO
    //********************************************
    ajustar() {
        let cont = 0;
        let i = 0;
        if (this.vec[1] == 0) {
            i = 1;
            while (i < this.vec[0] + 2 && this.vec[i] == 0) {
                cont = cont + 1;
                i = i + 1;
            }
            for (let j = i; j < this.vec[0] + 2; j++) {
                this.vec[j - cont] = this.vec[j];
            }
            this.vec[0] = this.vec[0] - cont;
        }
    }
    //*******************************************
    // ESTE MÉTODO INSERTA UN TERMINO EN EL
    //POLINOMIO
    //********************************************
    insertarTermino(coe, exp) {
        if (exp > this.vec[0]) {
            let aux = new Array(exp + 2);
            //Almacenar ceros en el vector aux
            aux.fill(0);
            for (let i = 1; i < this.vec[0] + 2; i++) {
                aux[i + exp - this.vec[0]] = this.vec[i];
            }
            aux[0] = exp;
            aux[aux[0] + 1 - exp] = coe;
            this.vec = aux;
            this.n = exp + 2;
        }
        else {
            let pos = this.vec[0] + 1 - exp;
            this.vec[pos] = this.vec[pos] + coe;
            this.ajustar();
        }
    }
    //*******************************************
    // SUMAR DOS POLINOMIOS
    //********************************************
    sumar(B) {
        let k = 1;
        let j = 1;
        let mayor = 0;
        let expA = 0;
        let expB = 0;
        let posC = 0;
        //1.Idenficar el polinomio con mayor grado
        if (this.vec[0] > B.obtenerDato(0)) {
            mayor = this.vec[0];
        }
        else {
            mayor = B.obtenerDato(0);
        }
        //2.Crear un nuevo vector donde se va a almanecar la suma del polinomio vec y B
        let C = new PolinomioFormaUno("C", new Array(mayor + 2).fill(0));
        C.asignarDato(0, mayor);
        while (k < this.vec[0] + 2 && j < B.obtenerDato(0) + 2) {
            //3.Identificar el exponente de cada uno de los polinomios A y B
            expA = this.vec[0] + 1 - k;
            expB = B.obtenerDato(0) + 1 - j;
            //4. Identificar los tres casos posibles ( expA == expB ) (expA > expB) (expA < expB)
            if (expA == expB) {
                posC = C.obtenerDato(0) + 1 - expA;
                C.asignarDato(posC, this.vec[k] + B.obtenerDato(j));
                k++;
                j++;
            }
            else if (expA > expB) {
                posC = C.obtenerDato(0) + 1 - expA;
                C.asignarDato(posC, this.vec[k]);
                k++;
            }
            else if (expA < expB) {
                posC = C.obtenerDato(0) + 1 - expB;
                C.asignarDato(posC, B.obtenerDato(j));
                j++;
            }
        }
        C.ajustar();
        return C;
    }
    //*******************************************
    // MULTIPLICAR DOS POLINOMIOS
    //********************************************
    multiplicar(B) {
        let expA = 0;
        let expB = 0;
        let expD = 0;
        let coefD = 0;
        let posD = 0;
        let D = new PolinomioFormaUno("D", new Array(this.vec[0] + B.obtenerDato(0) + 2).fill(0));
        D.asignarDato(0, this.vec[0] + B.obtenerDato(0));
        for (let j = 1; j < B.obtenerDato(0) + 2; j++) {
            expB = B.obtenerDato(0) + 1 - j;
            for (let k = 1; k < this.vec[0] + 2; k++) {
                expA = this.vec[0] + 1 - k;
                expD = expA + expB;
                coefD = this.vec[k] * B.obtenerDato(j);
                posD = D.obtenerDato(0) + 1 - expD;
                D.asignarDato(posD, D.obtenerDato(posD) + coefD);
            }
        }
        return D;
    }
}
exports.PolinomioFormaUno = PolinomioFormaUno;
//# sourceMappingURL=PolinomioFormaUno.js.map