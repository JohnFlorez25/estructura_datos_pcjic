# Clase Nodo

<div align="center">

| Atributos | Descripción |
|:-------------------:|---|
| -entero: coe | Para guardar el coeficiente del término. | 
| -entero: exp | Para guardar el exponente del término. |
| -Nodo: liga | Para guardar la referencia al siguiente Nodo. |
    
| Métodos | Descripción |
|:-------------------:|---|
| + Nodo( entero: c, e )  | Constructor que recibe como parámetro el coeficiente  y el exponente  del término. | 
| + entero:obtenerCoe( )  | Método utilizado para devolver  el coeficiente.|
| + entero:obtenerExp( )  | Método utilizado para devolver  el exponente. |
| + Nodo: obtenerLiga( )   | Método utilizado para devolver  la liga. | 
| + asignarCoe( entero: x)   | Método utilizado para asignar un nuevo valor al coeficiente.|
| + asignarLiga( Nodo: x)   | Método utilizado para asignar un nuevo valor a la liga.|
    
</div>

## Implementación de Métodos

<hr/>

### Método: + Nodo( entero: c, e ) 

~~~
Nodo:: Nodo ( entero: c, e)     
             coe = c

             Expo = e

            liga = null
fin método
~~~

## Descripción del Método

Este método se denomina constructor por que tiene el mismo nombre de la clase, este método se ejecuta al momento de crear o instanciar un objeto la clase y se utiliza para inicializar los atributos.

El encabezado del método nos indica lo siguiente:

- **Nodo::**                                                    Indica que el método pertenece a la  clase llamada Nodo.
- **Nodo**                                                       Indica que el método se llama Nodo.
- **( entero: c ,e )**                                           Indica que el método recibe  dos  parámetros de tipo entero.


El  método  asigna el parámetro  **c**  al  atributo **coe** y el parámetro **e** al atributo **exp**, también inicia la liga en **null**.
<hr/>









