import { Nodo } from "./Nodo";

export class ListaPolinomio {

    private nombre: string;
    private punta: Nodo;

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.punta = null;
    }

    public obtenerPunta(): Nodo {
        return this.punta;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public insertarTermino(coe: number, exp: number) {
        let q = null;
        q = null;
        let p = new Nodo();
        p = null;
        let ant = new Nodo();
        ant = null

        if (this.punta == null) {
            q = new Nodo();
            q.asignarCoe(coe);
            q.asignarExp(exp);
            this.punta = q;
        } else {
            p = this.punta;
            ant = null;
            while (p != null && p.obtenerExp() > exp) {
                ant = p;
                p = p.obtenerLiga();
            }
            if (p != null && p.obtenerExp() == exp) {
                p.asignarCoe(p.obtenerCoe() + coe);
                if (p.obtenerCoe() == 0) {
                    if (p == this.punta) {
                        this.punta = p.obtenerLiga();
                    } else {
                        ant.asignarLiga(p.obtenerLiga());

                    }
                    p = null;
                }

            } else {
                q = new Nodo();
                q.asignarCoe(coe);
                q.asignarExp(exp);
                if (p == this.punta) {
                    q.asignarLiga(this.punta);
                    this.punta = q;
                } else {
                    ant.asignarLiga(q);
                    q.asignarLiga(p);
                }
            }
        }
    }

    public mostrarPolinomio() {
        let band: boolean = true;
        let Q = new Nodo();
        Q = this.punta;
        let polinomio: string = "";
        while (Q != null) {

            if (Q.obtenerCoe() >= 0) {
                if (band) {
                    polinomio = polinomio + Q.obtenerCoe() + "Y^" + Q.obtenerExp();
                    band = false;
                } else {
                    polinomio = polinomio + " + " + Q.obtenerCoe() + "Y^" + Q.obtenerExp();
                }

            } else {
                polinomio = polinomio + " - " + (Q.obtenerCoe() * (-1)) + "Y^" + Q.obtenerExp();
            }
            Q = Q.obtenerLiga();
        }

        return polinomio;
    }

    public multiplicar(B: ListaPolinomio): ListaPolinomio {
        let expA = 0;
        let expB = 0;
        let coeA = 0;
        let coeB = 0;
        let C = new ListaPolinomio("C");
        let Q = new Nodo();
        Q = null
        let R = new Nodo();
        R = this.punta;
        while (R != null) {
            Q = B.obtenerPunta();
            while (Q != null) {
                expA = R.obtenerExp();
                expB = Q.obtenerExp();
                coeA = R.obtenerCoe();
                coeB = Q.obtenerCoe();
                C.insertarTermino(coeA * coeB, expA + expB);
                Q = Q.obtenerLiga();
            }
            R = R.obtenerLiga();
        }
        return C;
    }

    public sumar(B: ListaPolinomio): ListaPolinomio {
        let expA = 0;
        let expB = 0;
        let coefA = 0;
        let coefB = 0;
        let P = new Nodo();
        P = null;
        P = this.punta
        let Q = new Nodo();
        Q = null;
        Q = B.obtenerPunta();
        let C = new ListaPolinomio("D");
        while ((P != null) && (Q != null)) {
            expA = P.obtenerExp();
            expB = Q.obtenerExp();
            coefA = P.obtenerCoe();
            coefB = Q.obtenerCoe();
            if (expA == expB) {
                C.insertarTermino(coefA + coefB, expA);
                P = P.obtenerLiga();
                Q = Q.obtenerLiga();
            } else if (expA > expB) {
                C.insertarTermino(coefA, expA);
                P = P.obtenerLiga();
            } else if (expB > expA) {
                C.insertarTermino(coefB, expB);
                Q = Q.obtenerLiga();
            }
        }
        while (P != null) {
            C.insertarTermino(P.obtenerCoe(), P.obtenerExp());
            P = P.obtenerLiga();
        }
        while (Q != null) {
            C.insertarTermino(Q.obtenerCoe(), Q.obtenerExp());
            Q = Q.obtenerLiga();
        }

        return C;
    }
}