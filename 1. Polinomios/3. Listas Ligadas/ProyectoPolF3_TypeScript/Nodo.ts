export class Nodo {
    
    private coe: number;
    private exp: number;
    private liga: Nodo;

    public constructor(){
        //this.coe = coe;
        //this.exp = exp;
        this.liga = null;
    }

    public obtenerCoe(): number {
        return this.coe;
    }

    public obtenerExp(): number {
        return this.exp;
    }

    // método encargado de devolver la liga
    public obtenerLiga(): Nodo{
        return this.liga;
    }

    //método encargado de asignar un nuevo valor a coe
    public asignarCoe(coe: number) {
        this.coe = coe;
    }

    //método encargado de asignar un nuevo valor a exp
    public asignarExp(exp: number) {
        this.exp = exp;
    }     //método encargado de asignar un nuevo valor a la liga

    public asignarLiga(x: Nodo) {
        this.liga = x;
    }

}