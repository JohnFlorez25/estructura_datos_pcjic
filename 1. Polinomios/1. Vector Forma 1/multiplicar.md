# Método Múltiplicar

El método multiplica dos polinomios A y B y guarda el resultado de la multiplicación de estos en un polinomio C.

El método realiza las siguientes tareas:

1. El grado del polinomio C es la suma de los grados del polinomio A y B más dos posiciones
2. Se construye el polinomio C con un tamaño determinado en el paso 1 y se asigna su grado en la primera posición del vector C.
3. Cada termino del polinomio B se multiplica por cada termino del polinomio A.
4. Acumular el resultado en polinomio C.

## Implementación en Pseudocódigo

```
método multiplicar(Entero A[], Entero B[]){
    Entero expA, expB , expC , coefC , posC = 0
    Entero C [A[0] + B[0] + 2]]
    C[0] = A[0] + B[0];
    Para Entero j = 1 hasta j < B[0]+2 , j = j + 1
        expB = B[0] + 1 - j
        Para Entero k = 1 hasta k < A[0]+2 , k = k + 1 
            expA = A[0] + 1 - k
            expC = expA + expB
            coefC = A[k] * B[j]
            posC = C[0] + 1 - expC
            C[posC] = C[posC] + coefC
        }
    }
}
```

## Implementación en Java
```java
public void multiplicar(int A[], int B[]){
    int expA = 0;
    int expB = 0;
    int expC = 0;
    int coefC = 0;
    int posC = 0;
    int C [] = new int [A[0] + B[0] + 2];
    C[0] = A[0] + B[0];
    for (int j = 1 ; j < B[0]+2 ; j++){
        expB = B[0] + 1 - j;
        for (int k = 1; k < A[0]+2; k++) {
            expA = A[0] + 1 - k;
            expC = expA + expB;
            coefC = A[k] * B[j];
            posC = C[0] + 1 - expC;
            C[posC] = C[posC] + coefC;
        }
    }
}
```
