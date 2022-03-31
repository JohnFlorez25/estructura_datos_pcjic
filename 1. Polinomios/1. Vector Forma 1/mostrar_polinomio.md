# Método Mostrar

Partiendo de un vector dado

```java
  int vec [] = {4, -12, 0, 7, -87, 2};
```

## Implementación en Pseudocódigo
```
Publico void mostrar( Entero vec[] )
  Cadena polinomio
	Entero k = 0
  Entero exp = 0
	Para( k=1; k < vec[0]+2 ); k++) 
		Si(vec[k] != 0)
			Si(vec[k]>0) && (k > 1)
          polinomio = polinomio + " + " + vec[k] + "X^" + exp
        si_no
          polinomio = polinomio + " - " + ( vec[k] * (-1) ) + "X^" + exp;
      Fin_si
    Fin_si
  Fin_para
  imprima(polinomio)
Fin_método
```
## Implementación en Java

```java
  public static void mostrar(int vec[]){
        String polinomio = "";
        int k = 0;
        int exp = 0;
        for (k = 1; k < vec[0] + 2 ; k++) {
            //Aplicar formula para encontrar el exponente
            exp = vec[0] + 1 - k;
            if(vec[k] != 0){
                if (vec[k] > 0){
                    polinomio = polinomio + " + " + vec[k] + "X^" + exp;
                }
                else {
                    polinomio = polinomio + " - " + ( vec[k] * (-1) ) + "X^" + exp;
                }
            }
        }

        System.out.printf(polinomio);
    }
```
